import { PeopleIcons } from "@/widgets/people-icons";
import { GradientText } from "./components/gradient-text";
import { Measure } from "./components/measure";
import { cn } from "@/core/utils";
import { channelsDataLeft, channelsDataRight } from "./data/chanels-data";
import { ChannelsCard } from "./components/channels-card";
import { HorizontalScroll } from "@/ui-kit/components/horizontal-scroll";
import { EmailNewsletterBanner } from "./components/email-newsletter-banner";
import { audienceData } from "./data/audience-data";
import { PercentageBar } from "./components/percentage-bar";

export const AboutUsPage = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CodeReview",
    description:
      "CodeReview помогает IT компаниям находить талантливых джуниор-специалистов",
    url: process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000",
    logo: `${
      process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000"
    }/placeholder-logo.png`,
    foundingDate: "2020",
    industry: "IT Recruitment",
    numberOfEmployees: "10-50",
    slogan: "Помогаем компаниям находить таланты",
    sameAs: ["https://t.me/ITjobofferbot"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "Russian",
    },
    areaServed: {
      "@type": "Country",
      name: "Russia",
    },
    serviceType: ["IT Recruitment", "Job Placement", "Career Development"],
    audience: {
      "@type": "Audience",
      audienceType: "Junior IT Specialists",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <section className="flex flex-col gap-y-2.5 mb-10 lg:gap-y-5 lg:mb-20">
        <PeopleIcons className="md:hidden" />
        <h1 className="font-bold text-2xl leading-[28px] tracking-[-1px] md:text-[50px] md:leading-[48px] mb-5">
          Помогаем компаниям <PeopleIcons className="hidden md:inline-flex" />{" "}
          <br />
          <GradientText>находить</GradientText> таланты
        </h1>
        <p className="font-wix-display font-medium text-[20px] leading-[24px] text-neutral-800 max-w-[770px] sm:mr-50 md:text-[28px] md:leading-[34px]">
          Бесплатно размещаем вакансии и находим релевантных
          джуниор-специалистов. Работодатели могут перейти в раздел
          <span className="bg-[#E4E3FF] rounded-md px-1 mx-1 block-inline">
            «Резюме»
          </span>
          , чтобы выбрать подходящего кандидата, или
          <span className="bg-[#FFE3D4] rounded-md px-1 mx-1 block-inline">
            заполнить форму
          </span>
          , чтобы опубликовать вакансию в наших каналах
        </p>
      </section>
      <section
        className={cn(
          "grid grid-cols-[max-content_max-content] grid-rows-2 gap-y-12 gap-x-7.5 mb-20 justify-between",
          "lg:grid-cols-4 lg:grid-rows-1 lg:gap-x-[104px] lg:gap-y-0 lg:mb-45"
        )}
      >
        <Measure
          top="100.000+"
          bottom={
            <>
              специалистов ищут
              <br />
              работу через нас
            </>
          }
        />
        <Measure
          top="46%"
          bottom={
            <>
              кандидатов успешно
              <br />
              проходят первое интервью
            </>
          }
        />
        <Measure
          top="80%+"
          bottom={
            <>
              релевантных
              <br />
              откликов
            </>
          }
        />
        <Measure
          top="0 ₽"
          bottom={
            <>
              Бесплатно размещаем
              <br />
              вакансии
            </>
          }
        />
      </section>
      <section className="mb-20 md:mb-40 md:flex md:justify-between md:gap-x-12.5">
        <div className="pb-7.5 w-max space-y-[21px] sm:mx-auto md:w-full md:mx-0 md:pt-15 md:space-y-10">
          <h3
            className={cn(
              "font-bold max-w-[320px] text-[22px] leading-[26px] tracking-[-1px] font-wix-text",
              "sm:text-center",
              "md:max-w-full md:text-left md:mx-0 md:text-[30px] md:leading-[32px]"
            )}
          >
            <GradientText>Сотни талантливых новичков</GradientText> готовы
            начать свой путь вместе с вашей командой
          </h3>
          <div
            className={cn(
              "flex gap-x-2.5 w-max",
              "sm:mx-auto",
              "md:mx-0 md:flex-col md:gap-y-0"
            )}
          >
            <p className="font-semibold italic text-[26px] leading-[100%] tracking-[-1px] md:text-[50px]">
              150.000+
            </p>
            <p className="text-sm leading-[16px] tracking-[-0.8px] md:text-lg md:leading-[20px]">
              подписчиков в наших
              <br />
              телеграм каналах
            </p>
          </div>
        </div>
        <div className="hidden md:flex gap-x-5">
          <div className="flex flex-col gap-y-5">
            {channelsDataLeft.map((channel) => (
              <ChannelsCard key={channel.title} {...channel} />
            ))}
          </div>
          <div className="flex flex-col gap-y-5 pt-[105px]">
            {channelsDataRight.map((channel) => (
              <ChannelsCard key={channel.title} {...channel} />
            ))}
            <EmailNewsletterBanner />
          </div>
        </div>
        <HorizontalScroll className="flex md:hidden">
          {[...channelsDataLeft, ...channelsDataRight].map((channel) => (
            <ChannelsCard key={channel.title} {...channel} />
          ))}
          <EmailNewsletterBanner />
        </HorizontalScroll>
      </section>
      <section className="mb-12 sm:flex md:mb-25">
        <h3
          className={cn(
            "font-wix-text font-bold text-2xl leading-[28px] tracking-[-1px] mb-5 h-min",
            "sm:mr-[112px]",
            "md:text-[40px] md:leading-[40px] md:w-min"
          )}
        >
          Аудитория
          <br className="md:hidden" /> по направлениям
        </h3>
        <div className={cn("flex flex-col gap-y-[5px]", "md:gap-y-3")}>
          {audienceData.map((audience) => (
            <PercentageBar key={audience.title} {...audience} />
          ))}
        </div>
      </section>
    </>
  );
};
