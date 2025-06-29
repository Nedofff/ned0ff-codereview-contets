interface AITool {
  id: number;
  title: string;
  iconUrl: string;
  tags: string[];
  category: string;
  description: string;
  url: string;
  like: number;
  dislike: number;
}

export const aiToolsMock: AITool[] = [
  {
    id: 1,
    title: "ChatGPT",
    iconUrl: "/sofi.png",
    tags: ["Ассистент", "Чат-бот"],
    category: "Контент",
    description:
      "Многофункциональный чат-бот от OpenAI, способный вести диалоги, писать тексты, решать задачи и помогать в программировании. Многофункциональный чат-бот от OpenAI, способный вести диалоги, писать тексты, решать задачи и помогать в программировании.",
    url: "https://chat.openai.com",
    like: 8,
    dislike: 0,
  },
  {
    id: 2,
    title: "Midjourney",
    iconUrl: "/sofi.png",
    tags: ["Графика"],
    category: "Контент",
    description: "ИИ-генератор.",
    url: "https://midjourney.com",
    like: 12,
    dislike: 1,
  },
  {
    id: 3,
    title: "Claude",
    iconUrl: "/sofi.png",
    tags: ["Ассистент", "Чат-бот"],
    category: "Контент",
    description:
      "ИИ-ассистент от Anthropic для анализа текстов, программирования и решения сложных задач. Отличается безопасностью и точностью.",
    url: "https://claude.ai",
    like: 6,
    dislike: 0,
  },
  {
    id: 4,
    title: "DALL-E 3",
    iconUrl: "/sofi.png",
    tags: ["Графика"],
    category: "Контент",
    description:
      "Генератор изображений от OpenAI, интегрированный в ChatGPT. Создает реалистичные изображения по детальным текстовым описаниям.",
    url: "https://openai.com/dall-e-3",
    like: 9,
    dislike: 2,
  },
  {
    id: 5,
    title: "GitHub Copilot",
    iconUrl: "/sofi.png",
    tags: ["Ассистент"],
    category: "Разработка",
    description:
      "ИИ-помощник для программистов, автодополняющий код и предлагающий решения. Интегрируется с популярными IDE и редакторами.",
    url: "https://github.com/features/copilot",
    like: 15,
    dislike: 3,
  },
  {
    id: 6,
    title: "Stable Diffusion",
    iconUrl: "/sofi.png",
    tags: ["Графика"],
    category: "Контент",
    description:
      "Открытая модель генерации изображений. Позволяет создавать и редактировать изображения с высокой степенью контроля над процессом.",
    url: "https://stability.ai/stable-diffusion",
    like: 7,
    dislike: 1,
  },
];
