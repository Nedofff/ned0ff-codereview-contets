/* eslint-disable @typescript-eslint/no-require-imports */
const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Middleware для красивого логирования запросов
app.use((req, res, next) => {
  const startTime = Date.now();
  const timestamp = new Date().toLocaleString("ru-RU");
  const method = req.method;
  const url = req.originalUrl;
  const ip = req.ip || req.connection.remoteAddress || "unknown";

  console.log(`\n🌐 [${timestamp}] ${method} ${url}`);
  console.log(`📍 IP: ${ip}`);

  if (req.headers.authorization) {
    console.log(`🔐 Auth: ${req.headers.authorization.substring(0, 20)}...`);
  } else {
    console.log(`❌ Auth: отсутствует`);
  }

  if (Object.keys(req.query).length > 0) {
    console.log(`🔍 Query: ${JSON.stringify(req.query)}`);
  }

  // Перехватываем оригинальный res.json для логирования ответа
  const originalJson = res.json;
  res.json = function (body) {
    const endTime = Date.now();
    const duration = endTime - startTime;
    const statusCode = res.statusCode;

    // Определяем эмодзи для статуса
    let statusEmoji = "✅";
    if (statusCode >= 400 && statusCode < 500) statusEmoji = "⚠️";
    if (statusCode >= 500) statusEmoji = "❌";

    console.log(`${statusEmoji} Ответ: ${statusCode} (${duration}ms)`);

    if (body && body.items) {
      console.log(
        `📦 Данных: ${body.items.length}/${body.total} (skip: ${body.skip}, limit: ${body.limit})`
      );
    } else if (body && body.message) {
      console.log(`💬 Сообщение: ${body.message}`);
    }

    console.log(`${"─".repeat(60)}`);

    return originalJson.call(this, body);
  };

  next();
});

// Загрузка данных из db.json
const loadData = () => {
  const dataPath = path.join(__dirname, "db.json");
  const rawData = fs.readFileSync(dataPath, "utf8");
  return JSON.parse(rawData);
};

// Middleware для проверки токена
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Токен авторизации отсутствует",
    });
  }

  // Простая проверка токена (в реальном приложении нужна более сложная логика)
  if (!token.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Неверный формат токена",
    });
  }

  next();
};

// Функция для создания пагинации
const createPaginationResponse = (items, skip = 0, limit = 10) => {
  const startIndex = skip;
  const endIndex = startIndex + limit;
  const paginatedItems = items.slice(startIndex, endIndex);

  return {
    items: paginatedItems,
    total: items.length,
    skip: skip,
    limit: limit,
  };
};

// Применяем middleware авторизации ко всем маршрутам
// app.use(authMiddleware);

// Эндпоинты для всех коллекций
const collections = [
  "vacancies",
  "aiTools",
  "events",
  "petProjects",
  "questions",
  "recruiters",
  "resumes",
  "testTasks",
  "requirements",
];

collections.forEach((collection) => {
  // GET ALL с пагинацией
  app.get(`/api/${collection}`, (req, res) => {
    try {
      const data = loadData();
      const items = data[collection] || [];

      const skip = parseInt(req.query.skip) || 0;
      const limit = parseInt(req.query.limit) || 10;
      const sortBy = req.query.sort_by || null;
      const order = req.query.order || "asc";

      let sortedItems = [...items];

      // Простая сортировка по полю
      if (
        sortBy &&
        sortedItems.length > 0 &&
        sortedItems[0][sortBy] !== undefined
      ) {
        sortedItems.sort((a, b) => {
          const aVal = a[sortBy];
          const bVal = b[sortBy];

          if (typeof aVal === "string" && typeof bVal === "string") {
            return order === "asc"
              ? aVal.localeCompare(bVal)
              : bVal.localeCompare(aVal);
          }

          if (typeof aVal === "number" && typeof bVal === "number") {
            return order === "asc" ? aVal - bVal : bVal - aVal;
          }

          return 0;
        });
      }

      const paginatedResponse = createPaginationResponse(
        sortedItems,
        skip,
        limit
      );
      res.json(paginatedResponse);
    } catch (error) {
      res.status(500).json({
        message: "Ошибка при загрузке данных",
        error: error.message,
      });
    }
  });

  // GET BY ID
  app.get(`/api/${collection}/:id`, (req, res) => {
    try {
      const data = loadData();
      const items = data[collection] || [];
      const id = parseInt(req.params.id);

      const item = items.find((item) => item.id === id);

      if (!item) {
        return res.status(404).json({
          message: `Элемент с ID ${id} не найден`,
        });
      }

      res.json(item);
    } catch (error) {
      res.status(500).json({
        message: "Ошибка при загрузке данных",
        error: error.message,
      });
    }
  });
});

// Базовый эндпоинт для проверки статуса сервера
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
    message: "Сервер работает нормально",
  });
});

// Обработка несуществующих маршрутов
app.use((req, res) => {
  res.status(404).json({
    message: "Маршрут не найден",
  });
});

// Глобальный обработчик ошибок
app.use((err, req, res) => {
  console.error("❌ Ошибка сервера:", err.stack);
  res.status(500).json({
    message: "Внутренняя ошибка сервера",
  });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
  console.log(`Доступные эндпоинты:`);
  collections.forEach((collection) => {
    console.log(`  GET /${collection} - получить все ${collection}`);
    console.log(`  GET /${collection}/:id - получить ${collection} по ID`);
  });
  console.log(`  GET /health - проверка статуса сервера`);
});

module.exports = app;
