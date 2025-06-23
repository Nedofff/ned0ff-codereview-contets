import { TestTask } from "../test-tasks";

export const testTasksMockData: TestTask[] = [
  {
    id: 1,
    company: "Яндекс",
    task: "Реализация алгоритма сортировки массива. Необходимо реализовать функцию для сортировки массива целых чисел по возрастанию. Разрешается использовать любой алгоритм сортировки.",
    difficulty: 1,
    position: "Junior",
    solution: "https://github.com/example/sorting-solution",
    tags: "algorithms sorting arrays",
  },
  {
    id: 2,
    company: "VK",
    task: "Создание REST API для управления задачами. Разработать REST API с базовыми операциями CRUD для управления списком задач. Использовать Node.js и Express.",
    difficulty: 2,
    position: "Middle",
    solution: null,
    tags: "api backend nodejs express",
  },
  {
    id: 3,
    company: "Тинькофф",
    task: "Оптимизация SQL запросов. Дана база данных с медленными запросами. Необходимо проанализировать и оптимизировать производительность запросов к базе данных.",
    difficulty: 3,
    position: "Senior",
    solution: "https://github.com/tinkoff-solutions/sql-optimization",
    tags: "sql database optimization performance",
  },
  {
    id: 4,
    company: "Ozon",
    task: "Разработка компонента календаря на React. Создать переиспользуемый компонент календаря на React с возможностью выбора даты и диапазона дат.",
    difficulty: 2,
    position: "Middle",
    solution: null,
    tags: "react frontend components calendar",
  },
];
