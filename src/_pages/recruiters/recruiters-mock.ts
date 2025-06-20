export interface RecruiterData {
  id: string;
  title: string;
  jobTitle: string;
  stack: string[];
  name: string;
  likes: number;
  dislikes: number;
  telegramUrl?: string;
  email: string;
}

export const recruitersData: RecruiterData[] = [
  {
    id: "1",
    title: "Senior IT Recruiter в Сбере",
    jobTitle: "Senior IT Recruiter",
    stack: ["Java", "Spring", "Kotlin", "Backend"],
    name: "Анна Петрова",
    likes: 45,
    dislikes: 3,
    telegramUrl: "https://t.me/anna_petrov_rec",
    email: "anna.petrov@sber.ru",
  },
  {
    id: "2",
    title: "Tech Recruiter в Яндексе",
    jobTitle: "Tech Recruiter",
    stack: ["Python", "Go", "Machine Learning", "Data Science"],
    name: "Максим Иванов",
    likes: 38,
    dislikes: 5,
    telegramUrl: "https://t.me/maxim_yandex_rec",
    email: "m.ivanov@yandex.ru",
  },
  {
    id: "3",
    title: "IT Talent Acquisition в EPAM",
    jobTitle: "IT Talent Acquisition Specialist",
    stack: ["JavaScript", "React", "Node.js", "Frontend"],
    name: "Елена Смирнова",
    likes: 52,
    dislikes: 2,
    email: "elena.smirnova@epam.com",
  },
  {
    id: "4",
    title: "Senior Recruiter в Тинькофф",
    jobTitle: "Senior Recruiter",
    stack: ["C#", ".NET", "Azure", "DevOps"],
    name: "Дмитрий Козлов",
    likes: 29,
    dislikes: 7,
    telegramUrl: "https://t.me/dmitry_tinkoff_rec",
    email: "d.kozlov@tinkoff.ru",
  },
  {
    id: "5",
    title: "Head of IT Recruitment в VK",
    jobTitle: "Head of IT Recruitment",
    stack: ["PHP", "Highload", "Databases", "Architecture"],
    name: "Ольга Васильева",
    likes: 67,
    dislikes: 1,
    telegramUrl: "https://t.me/olga_vk_head_rec",
    email: "o.vasilyeva@vk.company",
  },
  {
    id: "6",
    title: "Junior IT Recruiter в МТС",
    jobTitle: "Junior IT Recruiter",
    stack: ["Mobile", "iOS", "Android", "Flutter"],
    name: "Артем Морозов",
    likes: 18,
    dislikes: 4,
    telegramUrl: "https://t.me/artem_mts_rec",
    email: "a.morozov@mts.ru",
  },
];
