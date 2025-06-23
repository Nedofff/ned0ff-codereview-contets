import { Project } from "../pet-projects";

export const petProjectsMock: Project[] = [
  {
    id: 1,
    authorLink: "https://t.me/taskflow_dev",
    tags: "task-management kanban teamwork",
    projectLink: "https://github.com/username/taskflow-manager",
    description:
      "TaskFlow Manager - Современный трекер задач с Kanban досками и командной работой. Поддерживает drag&drop, уведомления и интеграцию с популярными сервисами.",
    stack: "React TypeScript Node.js MongoDB",
  },
  {
    id: 2,
    authorLink: "mailto:weatherbot.dev@gmail.com",
    tags: "telegram-bot ai weather ml",
    projectLink: "https://github.com/username/weather-bot-ai",
    description:
      "WeatherBot AI - Telegram бот с ИИ для прогноза погоды. Использует машинное обучение для точных предсказаний и персонализированных рекомендаций.",
    stack: "Python TensorFlow Telegram-API FastAPI",
  },
  {
    id: 3,
    authorLink: "https://t.me/codereview_help",
    tags: "vscode extension code-review automation",
    projectLink: "https://github.com/username/codereview-assistant",
    description:
      "CodeReview Assistant - VS Code расширение для автоматизации код-ревью. Интегрируется с GitHub/GitLab, анализирует код на уязвимости и стилистические ошибки.",
    stack: "TypeScript VS-Code-API GitHub-API ESLint",
  },
  {
    id: 4,
    authorLink: "https://discord.gg/cryptotracker",
    tags: "crypto portfolio tracker realtime",
    projectLink: "https://github.com/username/crypto-tracker",
    description:
      "Crypto Portfolio Tracker - Трекер криптовалютного портфеля с real-time обновлениями, аналитикой доходности и уведомлениями о значительных изменениях цен.",
    stack: "React Redux WebSocket CoinGecko-API",
  },
  {
    id: 5,
    authorLink: "mailto:habits.dev@outlook.com",
    tags: "react-native habits mobile analytics",
    projectLink: "https://github.com/username/habit-tracker-mobile",
    description:
      "Habit Tracker Mobile - React Native приложение для отслеживания привычек с красивой аналитикой, напоминаниями и социальными функциями.",
    stack: "React-Native TypeScript Firebase Expo",
  },
  {
    id: 6,
    authorLink: "https://t.me/smarthome_support",
    tags: "smart-home iot dashboard automation",
    projectLink: "https://github.com/username/smart-home-dashboard",
    description:
      "Smart Home Dashboard - Web-панель для управления умным домом. Интеграция с IoT устройствами, графики потребления энергии, автоматизация сценариев.",
    stack: "Vue.js Node.js MQTT InfluxDB",
  },
];
