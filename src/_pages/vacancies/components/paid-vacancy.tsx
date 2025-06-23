import { Card } from "@/ui-kit";
import { cn } from "@/core/utils";
import { VacancySpecs } from "@/widgets/vacancy-specs";
import { routes } from "@/core/router";

type BaseAdvertisingCardProps = {
  id: number;
  title: string;
  remote: boolean;
  salary: string | null;
  bgImageDesktop: string;
  bgImageMobile: string;
  className?: string;
  internship?: boolean;
  isMTS?: boolean;
};

const PaidVacancyCard = ({
  id,
  className,
  title,
  remote,
  internship,
  salary,
  bgImageDesktop,
  bgImageMobile,
  isMTS,
}: BaseAdvertisingCardProps) => (
  <Card
    className={cn(
      "w-full  mx-auto",
      "grid grid-rows-[auto_1fr_auto]",
      "overflow-hidden max-h-51",
      className
    )}
  >
    <div
      className="absolute inset-0 hidden bg-cover bg-no-repeat bg-center md:block md:bg-contain"
      style={{
        backgroundImage: `url(${bgImageDesktop})`,
      }}
    />
    <div
      className="absolute inset-0 bg-cover bg-no-repeat bg-center md:hidden md:bg-contain"
      style={{
        backgroundImage: `url(${bgImageMobile})`,
      }}
    />
    <h3
      className={cn(
        "text-lg font-bold leading-[22px] text-neutral-800 mb-2.5 z-1 max-w-70",
        { "text-white": isMTS }
      )}
    >
      {title}
    </h3>
    <VacancySpecs
      remote={remote}
      internship={internship ?? false}
      salary={salary}
      className={cn("mb-7.5 md:mb-12.5 z-1", { "text-white": isMTS })}
    />
    <Card.Link title={title} href={routes.vacancyId(id.toString())} />
  </Card>
);

export const MtsCard = () => (
  <PaidVacancyCard
    id={51}
    title="Стажировка МТС Старт"
    remote
    salary="15000"
    bgImageDesktop="/vacancies/mts-desktop.png"
    bgImageMobile="/vacancies/mts-mobile.png"
    isMTS
  />
);
export const AvitoCard = () => (
  <PaidVacancyCard
    id={52}
    title="Магистратура Авито и ФКН ВШЭ"
    remote
    internship
    salary={null}
    bgImageDesktop="/vacancies/avito-desktop.png"
    bgImageMobile="/vacancies/avito-mobile.png"
  />
);
export const KpokCard = () => (
  <PaidVacancyCard
    id={53}
    title="Двухнедельный интенсив по погружению в твою ИТ-профессию"
    remote
    internship
    salary={null}
    bgImageDesktop="/vacancies/kpok-desktop.png"
    bgImageMobile="/vacancies/kpok-mobile.png"
  />
);
