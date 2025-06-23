interface Resume {
  id: string;
  title: string;
  grade: string;
  experience: string;
  stack: string[];
  resumeUrl: string;
  avatarUrl: string;
  name: string;
  telegram: string;
  email: string;
}

export const resumesMock: Resume[] = [
  {
    id: "1",
    title: "Data Science",
    grade: "Junior",
    experience: "3 года",
    stack: [
      "Python",
      "Docker",
      "Linux",
      "PostgreSQL",
      "Django",
      "Git",
      "Golang",
      "SQL",
    ],
    resumeUrl: "https://example.com/resume/1",
    avatarUrl: "/sofi.png",
    name: "Валерия",
    telegram: "telegram",
    email: "почта",
  },
  {
    id: "2",
    title: "Frontend Developer",
    grade: "Middle",
    experience: "5 лет",
    stack: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Redux",
      "Git",
      "Figma",
    ],
    resumeUrl: "https://example.com/resume/2",
    avatarUrl: "/sofi.png",
    name: "Алексей",
    telegram: "@alexdev",
    email: "alex@mail.ru",
  },
  {
    id: "3",
    title: "Backend Developer",
    grade: "Senior",
    experience: "7 лет",
    stack: [
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "Docker",
      "AWS",
      "GraphQL",
    ],
    resumeUrl: "https://example.com/resume/3",
    avatarUrl: "/sofi.png",
    name: "Михаил",
    telegram: "@mikhail_backend",
    email: "mikhail@gmail.com",
  },
  {
    id: "4",
    title: "DevOps Engineer",
    grade: "Middle",
    experience: "4 года",
    stack: [
      "Kubernetes",
      "Docker",
      "Terraform",
      "Jenkins",
      "AWS",
      "Linux",
      "Prometheus",
    ],
    resumeUrl: "https://example.com/resume/4",
    avatarUrl: "/sofi.png",
    name: "Дмитрий",
    telegram: "@dmitry_devops",
    email: "dmitry@yandex.ru",
  },
  {
    id: "5",
    title: "Mobile Developer",
    grade: "Junior",
    experience: "2 года",
    stack: ["React Native", "Flutter", "Dart", "JavaScript", "Firebase", "Git"],
    resumeUrl: "https://example.com/resume/5",
    avatarUrl: "/sofi.png",
    name: "Анна",
    telegram: "@anna_mobile",
    email: "anna@mail.ru",
  },
  {
    id: "6",
    title: "QA Engineer",
    grade: "Middle",
    experience: "4 года",
    stack: ["Selenium", "Cypress", "Jest", "Postman", "SQL", "Git", "Jira"],
    resumeUrl: "https://example.com/resume/6",
    avatarUrl: "/sofi.png",
    name: "Елена",
    telegram: "@elena_qa",
    email: "elena@gmail.com",
  },
];
