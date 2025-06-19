interface TestTaskMock {
  id: number;
  title: string;
  difficulty: "easy" | "medium" | "hard";
  company: string;
  description: string;
  url: string; // обязательная ссылка
  solution?: string; // необязательная ссылка
}

export const testTasksMockData: TestTaskMock[] = [
  {
    id: 1,
    title: "Реализация алгоритма сортировки массива",
    difficulty: "easy",
    company: "Яндекс",
    description:
      "Необходимо реализовать функцию для сортировки массива целых чисел по возрастанию. Разрешается использовать любой алгоритм сортировки.",
    url: "https://contest.yandex.ru/contest/12345",
    solution: "https://github.com/example/sorting-solution",
  },
  {
    id: 2,
    title: "Создание REST API для управления задачами",
    difficulty: "medium",
    company: "VK",
    description:
      "Разработать REST API с базовыми операциями CRUD для управления списком задач. Использовать Node.js и Express.",
    url: "https://career.vk.com/test-task/api-todo",
  },
  {
    id: 3,
    title: "Оптимизация SQL запросов",
    difficulty: "hard",
    company: "Тинькофф",
    description:
      "Дана база данных с медленными запросами. Необходимо проанализировать и оптимизировать производительность запросов к базе данных.",
    url: "https://tinkoff.ru/career/test-tasks/sql-optimization",
    solution: "https://github.com/tinkoff-solutions/sql-optimization",
  },
  {
    id: 4,
    title: "Разработка компонента календаря на React",
    difficulty: "medium",
    company: "Ozon",
    description:
      "Создать переиспользуемый компонент календаря на React с возможностью выбора даты и диапазона дат.",
    url: "https://ozon.dev/test-tasks/react-calendar",
  },
];
