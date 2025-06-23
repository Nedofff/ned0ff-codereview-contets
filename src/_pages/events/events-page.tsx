"use client";
import { useQueryParams } from "@/core/use-query-params";
import { useCurrentSpecialty } from "@/widgets/category-switcher";
import {
  CollectionPageLayout,
  createFilter,
} from "@/widgets/collection-page-layout";
import { useState } from "react";
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
  const currentCategory = useCurrentSpecialty();
  const { searchParams, setSearchParams } = useQueryParams();
  const currentPage = searchParams.get("page") ?? 1;
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string | boolean>
  >({});
  const handleSelectFilter = (id: string, value: string | boolean) => {
    setSelectedFilters((prev) => ({ ...prev, [id]: value }));
  };
  return (
    <CollectionPageLayout>
      <CollectionPageLayout.TitleSection>
        <CollectionPageLayout.Title>
          IT-мероприятия по {currentCategory}
        </CollectionPageLayout.Title>
        <CollectionPageLayout.Description>
          В этом разделе собраны актуальные конференции, хакатоны, метапы и
          курсы, связанные с IT и карьерой в цифровой сфере. Это отличный способ
          расширить профессиональный кругозор, найти стажировку или проект и
          завести полезные связи
        </CollectionPageLayout.Description>
      </CollectionPageLayout.TitleSection>
      <CollectionPageLayout.FiltersGroup
        filters={filters}
        onChange={handleSelectFilter}
      />
      <CollectionPageLayout.Content titleAuthWall="Получите доступ к 100+ IT-мероприятий и событий">
        <div className="grid grid-cols-1 gap-y-2.5 md:grid-cols-2 md:gap-4">
          {eventsData.map((item) => (
            <EventCard key={item.id} {...item} />
          ))}
        </div>
      </CollectionPageLayout.Content>
      <CollectionPageLayout.Pagination
        currentPage={+currentPage}
        totalPages={10}
        onPageChange={(page) => setSearchParams("page", page.toString())}
      />
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
