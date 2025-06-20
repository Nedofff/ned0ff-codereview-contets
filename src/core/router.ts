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
  notNow: "/not-now",
};

export const externalLinks = {
  auth: "https://tailwindcss.com/docs/background-image#setting-gradient-color-stops",
};
