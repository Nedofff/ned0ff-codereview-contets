import { Question } from "@/data/questions";
import { DetailedPageLayout } from "@/widgets/detailed-page-layout";
import { ArrowRightIcon, Card } from "@/ui-kit";
import { cn } from "@/core/utils";
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
        <DetailedPageLayout.Advertising
          className="gradient-secondary-light"
          classNameLink="text-primary-500"
        >
          Софи собрала все вопросы. Тренируйся и получай офферы быстрее!
        </DetailedPageLayout.Advertising>
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
