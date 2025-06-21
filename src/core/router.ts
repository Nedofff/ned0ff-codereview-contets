export const routes = {
  home: "/",
  jobs: "/jobs",
  jobCreate: "/jobs/add",
  jobId: (id: string) => `/jobs/${id}`,
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
  loginTelegram: "https://t.me/yourcodereview_bot",
  loginHh: "https://hh.ru/login",
};
