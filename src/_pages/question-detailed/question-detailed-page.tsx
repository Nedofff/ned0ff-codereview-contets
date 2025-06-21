import { Question } from "@/data/questions";
import { DetailedPageLayout } from "@/widgets/detailed-page-layout";
import Image from "next/image";
import { ArrowRightIcon, ArrowTopRightIcon, Card } from "@/ui-kit";
import { cn } from "@/core/utils";
import bgImage from "./assets/bg.png";
import Link from "next/link";
import { externalLinks } from "@/core/router";

const seoKeys = [
  "как отвечать на вопрос",
  "пример собеседования",
  "фреймворки на собеседовании",
  "типичные вопросы junior",
  "интервью вопросы и ответы",
];

export const QuestionDetailedPage = ({
  tags,
  question,
  answer,
  freq,
  stack,
}: Question) => {
  return (
    <DetailedPageLayout seoKeys={tags.split(" ")}>
      <div>
        <div className="space-y-2.5 mb-7.5">
          <div className="font-wix-display font-semibold leading-[20px] text-neutral-600 md:text-lg md:leading-[22px]">
            Avito.tech <span className="mx-1 text-neutral-300">•</span>{" "}
            27.01.2025
            <span className="mx-1 text-neutral-300">•</span> {stack}
          </div>

          <h1 className="font-wix-display font-bold text-[22px] leading-[26px] md:text-[26px] md:leading-[30px]">
            {question}
          </h1>
        </div>
        {answer && (
          <div
            className={cn("")}
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        )}
      </div>
      <div className="flex flex-col-reverse gap-y-[10px] md:flex-col">
        <div className="gradient-secondary-light relative p-5 flex flex-col gap-y-[15px] font-wix-display rounded-xl text-lg">
          <Image
            src="/sofi.png"
            alt="sofi"
            width={100}
            height={100}
            className="rounded-full z-1"
          />
          <p className="mb-[29px] z-1 leading-[22px] font-semibold">
            Софи собрала все вопросы. Тренируйся и получай офферы быстрее!
          </p>
          <p className="flex items-center justify-between z-1 font-bold text-primary-500 leading-[20px]">
            <span>Попробовать бесплатно</span>{" "}
            <ArrowTopRightIcon
              className="w-4 h-4 hidden md:block"
              width={16}
              height={16}
              viewBox="0 0 12 12"
            />
          </p>
          <Image
            src={bgImage}
            fill
            alt="bg"
            className="absolute top-0 left-0 object-cover pointer-events-none"
          />
          <Link className="absolute inset-0" href={externalLinks.sofi} />
        </div>
        <Card className="p-5 font-wix-display  leading-[20px]">
          <p className="flex items-center justify-between text-neutral-600 font-medium mb-5 md:mb-7.5 md:leading-[22px]">
            <span>Следующий вопрос</span> <ArrowRightIcon className="w-4 h-4" />
          </p>
          <p className="mb-2 font-semibold">
            Какие знаете шаблоны проектирования? Расскажите о двух шаблонах,
            используемых в работе.
          </p>
          <p className="text-neutral-500">
            {stack} <span className="mx-1 text-neutral-300">•</span> {freq}{" "}
            упоминаний
          </p>
          <Card.Link title="Следующий вопрос" href={externalLinks.sofi} />
        </Card>
      </div>
    </DetailedPageLayout>
  );
};
