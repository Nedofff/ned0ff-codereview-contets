import { SectionCard } from "./section-card";
import { CARDS_DATA } from "./section-cards-data";
import { cn } from "@/core/utils";
import { Card } from "@/ui-kit";
import { PeopleIcons } from "@/widgets/people-icons";

export function SectionsCards() {
  return (
    <section className=" pb-7.5 lg:pb-20">
      <div className="max-w-5xl mx-auto grid grid-cols-2 auto-rows-max sm:grid-cols-3 lg:grid-cols-4 gap-2 mb-2">
        {CARDS_DATA.map(({ Icon, description, href, title, className }) => (
          <SectionCard
            key={title}
            href={href}
            label={title}
            className={className}
          >
            <SectionCard.Icon>
              <Icon />
            </SectionCard.Icon>
            <SectionCard.Description>{description}</SectionCard.Description>
            <SectionCard.Title>{title}</SectionCard.Title>
          </SectionCard>
        ))}

        <Card className="col-span-2 sm:col-span-1 lg:col-span-3">
          <PeopleIcons />
          <div className="mt-[15px] lg:mt-[25px]">
            <p className="font-semibold text-gray-800 leading-[18px] lg:text-2xl lg:leading-[26px]">
              База резюме соискателей. Свяжитесь
              <br className="hidden lg:block" />
              <span className="lg:hidden"> </span>с понравившемся кандидатами
              напрямую
            </p>
          </div>
        </Card>

        <div
          className={cn(
            "bg-neutral-700 rounded-lg p-4 h-16 flex flex-row justify-between items-center  relative overflow-hidden",
            "col-span-2 sm:col-span-3 lg:col-span-1",
            "lg:p-5 lg:h-40 lg:flex-col lg:items-start"
          )}
        >
          <div className="absolute inset-0 lg:hidden">
            <div className="absolute top-0 right-4 w-16 h-16 bg-pink-500 opacity-30 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-4 w-12 h-12 bg-yellow-400 opacity-40 rounded-full blur-xl"></div>
            <div className="absolute top-2 left-16 w-8 h-8 bg-blue-500 opacity-25 rounded-full blur-lg"></div>
          </div>

          <div className="flex justify-between items-center h-full w-full lg:w-1/2 lg:flex-col">
            <div className="font-semibold text-neutral-10">
              Разместить вакансию
            </div>
            <div className="font-medium text-xs leading-[14px] text-neutral-200 p-[3px_9px_4px] rounded-xl border-1 border-neutral-100 h-[23px]">
              Бесплатно
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
