# Young Contest

## 🛠 Технологический стек

- **Framework**: Next.js 15.3.3
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **State Management**: Zustand 5
- **Forms**: React Hook Form 7
- **HTTP Client**: Axios 1.10
- **Code Highlighting**: React Syntax Highlighter
- **Storybook**: 9.0
- **Linting**: ESLint 9
- **Package Manager**: npm

## 📋 Требования

- Node.js 22 или выше
- npm или yarn

## 🔧 Установка и запуск

### Клонирование репозитория

```bash
git clone git@github.com:Nedofff ned0ff-codereview-contets.git
cd young-contest
```

### Установка зависимостей

```bash
npm install
```

### Запуск в режиме разработки

```bash
npm run dev
```

Приложение будет доступно по адресу `http://localhost:3000`

### Запуск mock-сервера

```bash
npm run server
# или для автоперезагрузки
npm run server:dev
```

## 🏗 Сборка для продакшена

```bash
npm run build
npm start
```

## 📚 Storybook

Для разработки и документирования компонентов:

```bash
npm run storybook
```

Storybook будет доступен по адресу `http://localhost:6006`

### Сборка Storybook

```bash
npm run build-storybook
```

## 🎨 Генерация иконок

Проект использует автоматическую генерацию React-компонентов из SVG-иконок с помощью `@svgr/cli`.

### Добавление новых иконок

1. **Поместите SVG-файлы** в папку `src/ui-kit/icons/raw-icons/`

   ```
   src/ui-kit/icons/raw-icons/
   ├── heart.svg
   ├── my-new-icon.svg
   └── another-icon.svg
   ```

2. **Запустите генерацию** компонентов:

   ```bash
   npm run icons:generate
   ```

3. **Добавьте экспорт** в `src/ui-kit/icons/index.ts`:
   ```typescript
   export { default as MyNewIconIcon } from "./my-new-icon";
   export { default as AnotherIconIcon } from "./another-icon";
   ```

### Что происходит при генерации

- SVG файлы из `raw-icons/` конвертируются в React компоненты TypeScript
- Имена файлов преобразуются в kebab-case (например, `MyIcon.svg` → `my-icon.tsx`)
- Цвет `#232325` заменяется на `currentColor` для возможности стилизации
- Компоненты получают типизацию `SVGProps<SVGSVGElement>`

### Использование иконок

После генерации и экспорта иконки можно использовать в компонентах:

```typescript
import { HeartIcon, MyNewIconIcon } from "@/ui-kit/icons";

export function MyComponent() {
  return (
    <div>
      <HeartIcon className="w-6 h-6 text-red-500" />
      <MyNewIconIcon className="w-4 h-4 text-blue-600" />
    </div>
  );
}
```

## 📁 Структура проекта

```
src/
├── _pages/           # Страницы приложения
├── app/             # Next.js App Router
├── core/            # Основная логика, утилиты, типы
├── data/            # API, моки, маппинг данных
├── ui-kit/          # Переиспользуемые UI компоненты
└── widgets/         # Сложные компоненты и виджеты
```

## 🔄 Скрипты

- `npm run dev` - Запуск в режиме разработки с Turbopack
- `npm run build` - Сборка для продакшена
- `npm start` - Запуск собранного приложения
- `npm run server` - Запуск mock-сервера
- `npm run server:dev` - Запуск mock-сервера с автоперезагрузкой
- `npm run lint` - Проверка кода линтером
- `npm run storybook` - Запуск Storybook
- `npm run build-storybook` - Сборка Storybook
- `npm run icons:generate` - Генерация иконок из SVG
