import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CodeReview - IT вакансии для джуниоров",
    short_name: "CodeReview",
    description:
      "Найди свою первую работу в IT! Вакансии, стажировки и тестовые задания для джуниор разработчиков.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#6366f1",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    categories: ["business", "productivity", "education"],
    lang: "ru",
    orientation: "portrait-primary",
    scope: "/",
  };
}
