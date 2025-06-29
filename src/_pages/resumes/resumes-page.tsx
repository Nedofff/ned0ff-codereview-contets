import {
  CollectionPageLayout,
  createFilter,
} from "@/widgets/collection-page-layout";
import { resumesMock } from "../../data/mocks/resumes-mock";
import { ResumeCard } from "./components/resume-card";
import { ButtonLink } from "@/ui-kit";
import { routes } from "@/core/router";
const filters = createFilter(
  [
    {
      name: "position",
      type: "options",
      label: "Позиция",
      options: [
        {
          label: "Data Science",
          value: "data-science",
        },
        {
          label: "Frontend Developer",
          value: "frontend",
        },
        {
          label: "Backend Developer",
          value: "backend",
        },
        {
          label: "DevOps Engineer",
          value: "devops",
        },
        {
          label: "Mobile Developer",
          value: "mobile",
        },
        {
          label: "QA Engineer",
          value: "qa",
        },
        {
          label: "Fullstack Developer",
          value: "fullstack",
        },
        {
          label: "UI/UX Designer",
          value: "design",
        },
      ],
    },
    {
      name: "grade",
      type: "options",
      label: "Уровень",
      options: [
        {
          label: "Junior",
          value: "junior",
        },
        {
          label: "Middle",
          value: "middle",
        },
        {
          label: "Senior",
          value: "senior",
        },
        {
          label: "Lead",
          value: "lead",
        },
      ],
    },
    {
      name: "city",
      type: "options",
      label: "Город",
      options: [
        {
          label: "Москва",
          value: "moscow",
        },
        {
          label: "Санкт-Петербург",
          value: "spb",
        },
        {
          label: "Новосибирск",
          value: "novosibirsk",
        },
        {
          label: "Екатеринбург",
          value: "ekaterinburg",
        },
        {
          label: "Нижний Новгород",
          value: "nizhny-novgorod",
        },
        {
          label: "Казань",
          value: "kazan",
        },
        {
          label: "Краснодар",
          value: "krasnodar",
        },
        {
          label: "Ростов-на-Дону",
          value: "rostov",
        },
      ],
    },
  ],
  { withOutSpecialty: true }
);
export const ResumesPage = () => {
  return (
    <CollectionPageLayout>
      <CollectionPageLayout.TitleSection>
        <CollectionPageLayout.Title>
          Ищете кандидатов?
          <br /> Резюме специалистов
        </CollectionPageLayout.Title>
        <CollectionPageLayout.Description>
          В этом разделе отображаются резюме людей, которые ищут работу.
          Работодатель может выбрать понравившееся резюме и написать кандидату
          напрямую. Чтобы резюме появилось в этом разделе, нужно
          зарегистрироваться в Софи и поставить галочку «Публиковать резюме на
          сайте»
        </CollectionPageLayout.Description>
      </CollectionPageLayout.TitleSection>
      <CollectionPageLayout.FiltersGroup
        action={
          <ButtonLink href={routes.resumeCreate} variant="filter">
            Разместить вакансию
          </ButtonLink>
        }
        filters={filters}
      />
      <CollectionPageLayout.Content
        titleAuthWall="Получите доступ к контактам 800+ резюме специалистов"
        className="grid grid-cols-1 gap-2.5 lg:gap-4 lg:grid-cols-3"
      >
        {resumesMock.map((resume) => (
          <ResumeCard key={resume.id} {...resume} />
        ))}
      </CollectionPageLayout.Content>
      <CollectionPageLayout.Pagination currentPage={1} totalPages={1} />
      <CollectionPageLayout.SeoKeys
        seoKeys={[
          "резюме junior разработчик",
          "лучшие резюме",
          "как составить резюме джуну",
          "опубликовать резюме бесплатно",
          "резюме программистов",
        ]}
      />
    </CollectionPageLayout>
  );
};
