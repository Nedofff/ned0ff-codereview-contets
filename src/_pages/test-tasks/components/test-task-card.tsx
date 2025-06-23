import { Card, ButtonLink, ArrowTopRightIcon } from "@/ui-kit";
import { DifficultyStars } from "../difficulty-start";
import { TestTask } from "@/data/test-tasks";

export const TestTaskCard = ({
  company,
  difficulty,
  task,
  solution,
}: TestTask) => {
  const difficultyLabel = {
    0: "easy",
    1: "medium",
    2: "hard",
  }[difficulty];
  const difficultyLabels = {
    easy: "Легкая сложность",
    medium: "Средняя сложность",
    hard: "Сложная сложность",
  };
  return (
    <Card className="flex flex-col gap-y-[5px]">
      <div className="flex justify-between items-center">
        <span className="text-neutral-600 font-semibold leading-[20px]">
          {company}
          {"  "}
          <span className="text-neutral-300 mx-1">•</span>
          {"  "}
          {difficultyLabels[difficultyLabel as keyof typeof difficultyLabels]}
        </span>
        <DifficultyStars
          difficulty={difficultyLabel as "easy" | "medium" | "hard"}
        />
      </div>
      <h3 className="font-bold text-lg text-neutral-800 leading-[22px] mb-[15px] md:text-xl md:leading-[24px]">
        {"title"}
      </h3>
      <p className="text-neutral-800 font-wix-display font-medium leading-[20px] mb-7.5">
        {"description"}
      </p>
      <div className="flex gap-2.5 mt-auto">
        <ButtonLink
          href={task}
          variant="second"
          className="flex items-center gap-x-2"
        >
          <span>Задание</span> <ArrowTopRightIcon />
        </ButtonLink>
        {solution && (
          <ButtonLink
            href={solution}
            variant="second"
            className="flex items-center gap-x-2"
          >
            <span>Решение</span> <ArrowTopRightIcon />
          </ButtonLink>
        )}
      </div>
    </Card>
  );
};
