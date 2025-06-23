import { routes } from "@/core/router";
import { ButtonLink } from "@/ui-kit";
import {
  CollectionPageLayout,
  createFilter,
} from "@/widgets/collection-page-layout";
import { aiToolsMock } from "../../data/mocks/ai-tools-mock";
import { AiToolCard } from "./components/ai-tool-card";
const filters = createFilter([
  {
    name: "type-tools",
    type: "options",
    label: "Тип инструмента",
    options: [
      { label: "Генераторы текста", value: "text-generator" },
      { label: "Генераторы изображений", value: "image-generator" },
      { label: "Генераторы видео", value: "video-generator" },
      { label: "Генераторы кода", value: "code-generator" },
      { label: "Генераторы презентаций", value: "presentation-generator" },
    ],
  },
]);
export const AiToolsPage = () => {
  return (
    <CollectionPageLayout>
      <CollectionPageLayout.TitleSection>
        <CollectionPageLayout.Title template="AI-инструменты для {category}" />
        <CollectionPageLayout.Description>
          В этом разделе собраны AI-инструменты, которые помогают в разработке,
          автоматизации задач и поиске работы. Мы парсим популярные и новые
          тулзы из интернета, добавляем описание, ссылки, а также даем
          пользователям возможность голосовать за полезность каждого инструмента
        </CollectionPageLayout.Description>
      </CollectionPageLayout.TitleSection>
      <CollectionPageLayout.FiltersGroup
        action={
          <ButtonLink
            href={routes.aiToolCreate}
            variant="filter"
            className="text-lg mr-2.5 leading-[22px] text-nowrap p-[12px_15px]"
          >
            Добавить инструмент
          </ButtonLink>
        }
        filters={filters}
      />
      <CollectionPageLayout.Content
        titleAuthWall="Получить доступ к 300+ AI-инструментам для разработки"
        className="grid grid-cols-1 gap-2.5 lg:gap-4 lg:grid-cols-2"
      >
        {aiToolsMock.map((tool) => (
          <AiToolCard key={tool.id} {...tool} />
        ))}
      </CollectionPageLayout.Content>
      <CollectionPageLayout.Pagination currentPage={1} totalPages={20} />
      <CollectionPageLayout.SeoKeys
        seoKeys={[
          "ai tools для программистов",
          "лучшие ai сервисы для резюме",
          "инструменты на базе GPT",
          "ai ассистенты для поиска работы",
          "полезные нейросети 2024",
          "ии инструменты",
        ]}
      />
    </CollectionPageLayout>
  );
};
