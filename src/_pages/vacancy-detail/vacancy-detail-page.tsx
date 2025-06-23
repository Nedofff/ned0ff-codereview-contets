import { externalLinks } from "@/core/router";
import { getLocalDate } from "@/core/time";
import { Vacancy } from "@/data/vacancies";
import { ButtonLink, Card, Company } from "@/ui-kit";
import { DetailedPageLayout } from "@/widgets/detailed-page-layout";
import { ButtonSideAction } from "./components/button-side-action";
import { SimilarVacancy } from "./components/similar-vacancies";
import { VacancySpecs } from "@/widgets/vacancy-specs";
import styles from "./vacancy-detail-page.module.css";
import { AdvertisingRender } from "./components/advertising-render";

export function VacancyDetailPage({
  title,
  datePublication,
  url,
  image,
  companyName,
  location,
  similarVacancies,
  remote,
  internship,
  salary,
  description,
}: Vacancy) {
  return (
    <DetailedPageLayout
      seoKeys={[
        "вакансии джуниор",
        "как откликнуться на вакансию",
        "примеры вакансий junior",
        "вакансии по Java",
        "стажировки по Java",
      ]}
    >
      <div>
        <div className="space-y-2.5 border-b border-neutral-300 mb-7.5">
          <p className="font-wix-display font-medium leading-[20px] text-neutral-600 md:leading-[22px]">
            Опубликовано {getLocalDate(datePublication)}
          </p>
          <h1 className="font-bold leading-[26px] text-[22px] md:text-[26px] md:leading-[30px]">
            {title}
          </h1>
          <VacancySpecs
            remote={remote}
            internship={internship}
            salary={salary}
            className="my-5 md:mt-7.5"
          />
        </div>
        <AdvertisingRender />
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      <div className="flex flex-col gap-y-2.5">
        <Card className="p-5 flex flex-col gap-y-[5px] ">
          <Company
            companyName={companyName}
            image={image ?? ""}
            location={location ?? ""}
            className="mb-[10px]"
            classNameImage="w-12.5 h-12.5"
          />
          <ButtonLink variant="filter" href={externalLinks.sofi}>
            Получить оффер
          </ButtonLink>
          <ButtonSideAction href={url} />
        </Card>
        <DetailedPageLayout.Advertising
          className="bg-[#F9E3A854] "
          classNameLink="text-tertiary-500"
        >
          Не зовут на интервью? Автоматизируй поиск работы своему AI ассистенту
          Софи
        </DetailedPageLayout.Advertising>
        <Card className="px-5 pt-5 pb-[5px] font-wix-display">
          <p className=" font-bold text-lg leading-[20px]">Похожие вакансии</p>
          <div className="divide-[#EAEAEA] divide-y">
            {similarVacancies.map((vacancy) => (
              <SimilarVacancy key={vacancy.id} {...vacancy} />
            ))}
          </div>
        </Card>
      </div>
    </DetailedPageLayout>
  );
}
