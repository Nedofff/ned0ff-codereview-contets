import {
  CollectionPageLayout,
  createFilter,
} from "@/widgets/collection-page-layout";
import { EventCard } from "./components/event-card";
import { eventsData } from "../../data/mocks/events-mock";
const filters = createFilter([
  {
    name: "city",
    type: "options",
    label: "Город",
    options: [
      {
        value: "moscow",
        label: "Москва",
      },
      {
        value: "spb",
        label: "Санкт-Петербург",
      },
      {
        value: "ekb",
        label: "Екатеринбург",
      },
      {
        value: "novosibirsk",
        label: "Новосибирск",
      },
    ],
  },
  {
    name: "online",
    type: "switch",
    label: "Онлайн",
  },
]);
export const EventsPage = () => {
  return (
    <CollectionPageLayout>
      <CollectionPageLayout.TitleSection>
        <CollectionPageLayout.Title template="IT-мероприятия по {category}" />
        <CollectionPageLayout.Description>
          В этом разделе собраны актуальные конференции, хакатоны, метапы и
          курсы, связанные с IT и карьерой в цифровой сфере. Это отличный способ
          расширить профессиональный кругозор, найти стажировку или проект и
          завести полезные связи
        </CollectionPageLayout.Description>
      </CollectionPageLayout.TitleSection>
      <CollectionPageLayout.FiltersGroup filters={filters} />
      <CollectionPageLayout.Content titleAuthWall="Получите доступ к 100+ IT-мероприятий и событий">
        <div className="grid grid-cols-1 gap-y-2.5 md:grid-cols-2 md:gap-4">
          {eventsData.map((item) => (
            <EventCard key={item.id} {...item} />
          ))}
        </div>
      </CollectionPageLayout.Content>
      <CollectionPageLayout.Pagination currentPage={1} totalPages={10} />
      <CollectionPageLayout.SeoKeys
        seoKeys={[
          "it мероприятия 2025",
          "хакатоны для студентов",
          "календарь it событий",
          "ai хакатоны онлайн",
          "мероприятия по фронтенду",
          "it events moscow",
          "data science конференции",
        ]}
      />
    </CollectionPageLayout>
  );
};
