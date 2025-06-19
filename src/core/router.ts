export const routes = {
  home: "/",
  jobs: "/jobs",
  jobCreate: "/jobs/add",
  jobId: (id: string) => `/jobs/${id}`,
  petProjects: "/pet-projects",
  petProjectId: (id: string) => `/pet-projects/${id}`,
  questions: "/questions",
  questionId: (id: string) => `/questions/${id}`,
  requirements: "/requirements",
  testTasks: "/test-tasks",
  events: "/events",
  recruiters: "/recruiters",
  resumes: "/resumes",
  aiTools: "/ai-tools",
  aboutUs: "/about-us",
  notNow: "/not-now",
};

export const externalLinks = {
  auth: "https://tailwindcss.com/docs/background-image#setting-gradient-color-stops",
};
