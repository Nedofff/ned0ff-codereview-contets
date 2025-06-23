export const routes = {
  home: "/",
  vacancies: "/vacancies",
  vacanciesCreate: "/vacancies/add",
  vacancyId: (id: string) => `/vacancies/${id}`,
  petProjects: "/pet-projects",
  petProjectCreate: "/pet-projects/add",
  petProjectId: (id: string) => `/pet-projects/${id}`,
  questions: "/questions",
  questionId: (id: string) => `/questions/${id}`,
  resumes: "/resumes",
  resumeCreate: "/resumes/add",
  requirements: "/requirements",
  recruitersCreate: "/recruiters/add",
  aiTools: "/ai-tools",
  aiToolCreate: "/ai-tools/add",
  testTasks: "/test-tasks",
  events: "/events",
  recruiters: "/recruiters",
  aboutUs: "/about-us",
  underConstruction: "/under-construction",
};

export const externalLinks = {
  sofi: "https://jobs.yourcodereview.com/ai/",
  testing: "https://interview.yourcodereview.com/testing",
  botTelegram: (uuid?: string) => {
    const baseUrl = "https://t.me/ITjobofferbot";
    const params = uuid ? `?startapp=${uuid}` : "";
    return baseUrl + params;
  },
  loginHh: "https://hh.ru/login",
};
