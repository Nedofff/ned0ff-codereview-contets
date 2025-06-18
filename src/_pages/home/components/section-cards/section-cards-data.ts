import {
  BriefcaseIcon,
  CalendarIcon,
  CodeAsteriskIcon,
  CodeIcon,
  MessageIcon,
  MicrophoneIcon,
  SparklesIcon,
  StackIcon,
} from "@/ui-kit/icons";

type CardData = {
  Icon: React.ElementType;
  title: string;
  description: string;
  href: string;
  className?: string;
};

export const CARDS_DATA: CardData[] = [
  {
    Icon: BriefcaseIcon,
    title: "Вакансии / Cтажировки",
    description:
      "Актуальные junior-вакансии и стажировки с hh.ru, Habr Career, LinkedIn, Telegram и других платформ",
    href: "/jobs",
  },
  {
    Icon: StackIcon,
    title: "Необходимые навыки",
    description:
      "Популярные навыки и ключевые слова из вакансий — можно использовать для улучшения резюме",
    href: "/not-now",
  },
  {
    Icon: CodeIcon,
    title: "Тестовые задания",
    description:
      "Реальные задания с отборов на стажировки и junior-позиции — для практики и портфолио",
    href: "/not-now",
    className: "gradient-quaternary-light",
  },
  {
    Icon: MicrophoneIcon,
    title: "Собеседования",
    description:
      "Реальные вопросы с интервью, сгруппированные по стеку и уровню сложности — с пояснениями и примерами ответов",
    href: "/questions",
  },
  {
    Icon: CalendarIcon,
    title: "IT-мероприятия",
    description:
      "Конференции, хакатоны, метапы и курсы — чтобы расширить кругозор, найти стажировку и завести связи",
    href: "/not-now",
    className: "gradient-secondary-light",
  },
  {
    Icon: CodeAsteriskIcon,
    title: "Пет-проекты",
    description:
      "Проекты для портфолио, в том числе коммерческие. Отличный способ прокачать скиллы и показать опыт",
    href: "/not-now",
  },
  {
    Icon: MessageIcon,
    title: "Контакты рекрутеров",
    description:
      "Контакты рекрутеров и сотрудников, готовых рекомендовать в свою компанию. Можно найти того, кто поможет попасть на собеседование",
    href: "/not-now",
  },
  {
    Icon: SparklesIcon,
    title: "ИИ инструменты",
    description:
      "Подборка AI-тулзов для автоматизации, разработки и поиска работы — с описаниями и рейтингом полезности",
    href: "/not-now",
  },
];
