"use client";
import { QuestionsPagination } from "../../app/questions/components/questions-pagination";
import { QuestionsFilter } from "../../app/questions/components/questions-filter";

interface Question {
  id: number;
  question: string;
  technology: string;
  mentions: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "В чем разница передачи параметров по ссылке и значению?",
    technology: "Java",
    mentions: "1490 упоминаний",
  },
  {
    id: 2,
    question:
      "Какие знаете шаблоны проектирования? Расскажите о двух шаблонах, используемых в работе.",
    technology: "Java",
    mentions: "1050 упоминаний",
  },
  {
    id: 3,
    question:
      "Какие типы данных в Java? Чем отличается объект от простых типов данных?",
    technology: "Java",
    mentions: "920 упоминаний",
  },
  {
    id: 4,
    question: "Что такое JVM, JDK, JRE?",
    technology: "Java",
    mentions: "506 упоминаний",
  },
  {
    id: 5,
    question: "Зачем используют JVM?",
    technology: "Java",
    mentions: "429 упоминаний",
  },
  {
    id: 6,
    question: "Что такое bytecode?",
    technology: "Java",
    mentions: "292 упоминаний",
  },
  {
    id: 7,
    question: "Какие признаки JavaBean?",
    technology: "Java",
    mentions: "94 упоминаний",
  },
];

const seoKeys = [
  "вопросы на собеседовании junior разработчик",
  "технические вопросы фронтенд",
  "вопросы по JavaScript на собеседовании",
  "вопросы по SQL для собеседования",
  "вопросы в Яндекс собеседование",
  "частые вопросы на собеседовании",
];

export function QuestionsPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-0">
        {/* TODO: TITLE SECTION */}

        {/* TODO: FILTERS SECTION */}

        {/* Questions List */}
        <section className="px-4 lg:px-[190px] mb-6 lg:mb-[80px]">
          <div className="flex flex-col items-end gap-[10px]">
            {questions.map((item, index) => (
              <QuestionCard
                key={item.id}
                question={item.question}
                technology={item.technology}
                mentions={item.mentions}
                isAd={index === 3}
              />
            ))}
          </div>
        </section>

        {/* Pagination */}
        <section className="px-4 lg:px-0 mb-8 lg:mb-[80px] flex justify-center">
          <QuestionsPagination
            currentPage={2}
            totalPages={24}
            onPageChange={(page) => console.log(page)}
          />
        </section>

        {/* SEO Keywords */}
        <section className="px-4 lg:px-[190px] mb-8 lg:mb-[80px]">
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {seoKeys.map((key, index) => (
              <SeoKey key={index} keyword={key} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function QuestionCard({
  question,
  technology,
  mentions,
  isAd = false,
}: {
  question: string;
  technology: string;
  mentions: string;
  isAd?: boolean;
}) {
  if (isAd) {
    return (
      <div className="w-full max-w-[1019px] bg-gradient-to-b from-[#3A4D75] to-[#1F2937] rounded-[18px] p-6 lg:p-8 mb-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
          <div className="flex-1">
            <h3 className="text-white text-lg lg:text-xl font-semibold mb-3">
              Получи персональную обратную связь от Senior-разработчика
            </h3>
            <p className="text-gray-300 text-sm lg:text-base mb-4">
              Отправь свой код на ревью и получи детальную оценку с
              рекомендациями
            </p>
            <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Отправить код
            </button>
          </div>
          <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/10 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 lg:w-10 lg:h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1019px] bg-white rounded-[18px] p-6 lg:p-8 group hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1 pr-4">
          <h3 className="text-gray-900 text-lg lg:text-xl font-medium mb-4 leading-tight">
            {question}
          </h3>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="bg-gray-100 px-3 py-1 rounded-full font-medium">
              {technology}
            </span>
            <span>{mentions}</span>
          </div>
        </div>
        <div className="flex-shrink-0">
          <svg
            className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
