export const routes = {
  home: "/",
  jobs: "/jobs",
  jobCreate: "/jobs/add",
  jobId: (id: string) => `/jobs/${id}`,
  notNow: "/not-now",
};

export const externalLinks = {
  auth: "https://tailwindcss.com/docs/background-image#setting-gradient-color-stops",
};
