export interface PetProject {
  id: string;
  title: string;
  description: string;
  author: string;
  icon?: string;
  type: "opensource" | "commercial";
  githubUrl: string;
  contactUrl: string;
}

export const petProjectsMock: PetProject[] = [
  {
    id: "1",
    title: "TaskFlow Manager",
    description:
      "Современный трекер задач с Kanban досками и командной работой. Поддерживает drag&drop, уведомления и интеграцию с популярными сервисами.",
    author: "Алексей Смирнов",
    icon: "https://avatars.githubusercontent.com/u/12345678?v=4",
    type: "opensource",
    githubUrl: "https://github.com/username/taskflow-manager",
    contactUrl: "https://t.me/taskflow_dev",
  },
  {
    id: "2",
    title: "WeatherBot AI",
    description:
      "Telegram бот с ИИ для прогноза погоды. Использует машинное обучение для точных предсказаний и персонализированных рекомендаций.",
    author: "Мария Иванова",
    icon: "https://avatars.githubusercontent.com/u/87654321?v=4",
    type: "commercial",
    githubUrl: "https://github.com/username/weather-bot-ai",
    contactUrl: "mailto:weatherbot.dev@gmail.com",
  },
  {
    id: "3",
    title: "CodeReview Assistant",
    description:
      "VS Code расширение для автоматизации код-ревью. Интегрируется с GitHub/GitLab, анализирует код на уязвимости и стилистические ошибки.",
    author: "Дмитрий Петров",
    icon: "https://avatars.githubusercontent.com/u/11223344?v=4",
    type: "opensource",
    githubUrl: "https://github.com/username/codereview-assistant",
    contactUrl: "https://t.me/codereview_help",
  },
  {
    id: "4",
    title: "Crypto Portfolio Tracker",
    description:
      "Трекер криптовалютного портфеля с real-time обновлениями, аналитикой доходности и уведомлениями о значительных изменениях цен.",
    author: "Анна Козлова",
    type: "commercial",
    githubUrl: "https://github.com/username/crypto-tracker",
    contactUrl: "https://discord.gg/cryptotracker",
  },
  {
    id: "5",
    title: "Habit Tracker Mobile",
    description:
      "React Native приложение для отслеживания привычек с красивой аналитикой, напоминаниями и социальными функциями.",
    author: "Игорь Соколов",
    type: "opensource",
    githubUrl: "https://github.com/username/habit-tracker-mobile",
    contactUrl: "mailto:habits.dev@outlook.com",
  },
  {
    id: "6",
    title: "Smart Home Dashboard",
    description:
      "Web-панель для управления умным домом. Интеграция с IoT устройствами, графики потребления энергии, автоматизация сценариев.",
    author: "Елена Волкова",
    type: "commercial",
    githubUrl: "https://github.com/username/smart-home-dashboard",
    contactUrl: "https://t.me/smarthome_support",
  },
];
