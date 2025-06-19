import { Card } from "@/ui-kit";
import Link from "next/link";

export function QuestionCard({
  question,
  technology,
  mentions,
  href,
  isAd = false,
}: {
  question: string;
  technology: string;
  mentions: string;
  href: string;
  isAd?: boolean;
}) {
  if (isAd) {
    return (
      <div className="bg-gradient-to-b from-[#3A4D75] to-[#1F2937] rounded-2xl p-6 mb-4">
        <h3 className="text-white text-xl font-semibold mb-3">
          Получи персональную обратную связь от Senior-разработчика
        </h3>
        <p className="text-gray-300 mb-4">
          Отправь свой код на ревью и получи детальную оценку с рекомендациями
        </p>
        <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100">
          Отправить код
        </button>
      </div>
    );
  }

  return (
    <Card className="w-full relative">
      <h3 className="text-black font-bold mb-1 leading-[20px] md:text-lg md:leading-[24px]">
        {question}
      </h3>
      <p className="text-neutral-600 font-wix-display text-sm leading-[18px] md:text-lg md:leading-[22px]">
        {technology} • {mentions}
      </p>
      <Link href={href} className="absolute inset-0" />
    </Card>
  );
}
