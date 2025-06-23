import { routes } from "@/core/router";
import { Question } from "@/data/questions";
import { Card } from "@/ui-kit";
import Link from "next/link";

export function QuestionCard({ question, freq, stack, id }: Question) {
  return (
    <Card className="w-full relative">
      <h3 className="text-black font-bold mb-1 leading-[20px] md:text-lg md:leading-[24px]">
        {question}
      </h3>
      <p className="text-neutral-600 font-wix-display text-sm leading-[18px] md:text-lg md:leading-[22px]">
        {stack} • {freq} упоминаний
      </p>
      <Link
        href={routes.questionId(id.toString())}
        className="absolute inset-0"
      />
    </Card>
  );
}
