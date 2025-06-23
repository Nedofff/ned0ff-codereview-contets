import { MetadataRoute } from "next";
import { getVacanciesApi, type Vacancy } from "@/data/vacancies";
import { testTasksApi, type TestTask } from "@/data/test-tasks";
import { getQuestionsApi, type Question } from "@/data/questions";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000";

  try {
    // Получаем данные для динамических страниц
    const vacanciesApi = getVacanciesApi(() => "");
    const questionsApi = getQuestionsApi(() => "");

    const [vacancies, testTasks, questions] = await Promise.all([
      vacanciesApi
        .getAll({ skip: 0, limit: 1000 })
        .catch(() => ({ items: [], total: 0 })),
      testTasksApi.getTestTasks().catch(() => []),
      questionsApi.getQuestions().catch(() => []),
    ]);

    // URL для вакансий
    const vacancyUrls = vacancies.items.map((vacancy: Vacancy) => ({
      url: `${baseUrl}/vacancies/${vacancy.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

    // URL для тестовых заданий
    const testTaskUrls = testTasks.map((testTask: TestTask) => ({
      url: `${baseUrl}/test-tasks/${testTask.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

    // URL для вопросов
    const questionUrls = questions.map((question: Question) => ({
      url: `${baseUrl}/questions/${question.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

    return [
      // Главная страница
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 1,
      },
      // Основные разделы
      {
        url: `${baseUrl}/vacancies`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.9,
      },
      {
        url: `${baseUrl}/test-tasks`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/questions`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/pet-projects`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/resumes`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/recruiters`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      },
      {
        url: `${baseUrl}/events`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      },
      {
        url: `${baseUrl}/ai-tools`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      },
      {
        url: `${baseUrl}/requirements`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      },
      {
        url: `${baseUrl}/about-us`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      },
      // Динамические страницы
      ...vacancyUrls,
      ...testTaskUrls,
      ...questionUrls,
    ];
  } catch (error) {
    console.error("Ошибка при генерации sitemap:", error);

    // Возвращаем базовые URL при ошибке
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      },
      {
        url: `${baseUrl}/vacancies`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.9,
      },
      {
        url: `${baseUrl}/about-us`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      },
    ];
  }
}
