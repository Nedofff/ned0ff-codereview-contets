"use client";
import Image from "next/image";
import bgGradient from "./bg-gradient.png";
import {
  DuckIcon,
  LinkedinIcon,
  Logo,
  TelegramIcon,
  YoutubeIcon,
} from "@/ui-kit";
import Link from "next/link";
import { cn } from "@/core/utils";
import { Ticker } from "./ticker";
import { routes } from "@/core/router";
export function Footer() {
  return (
    <footer>
      <Ticker />
      <div className="relative bg-gray-900 text-white overflow-hidden">
        <Image
          src={bgGradient}
          alt="Background gradient"
          fill
          className="object-cover h-full"
          priority
        />
        <div
          className={cn(
            "relative z-1 px-[15px] py-5",
            "lg:p-[60px_110px_20px]"
          )}
        >
          <div
            className={cn(
              "grid gap-y-7.5 mb-5",
              "md:grid-cols-[1fr_max-content] md:grid-rows-[max-content_max-content] md:gap-x-2",
              "lg:mb-15 lg:gap-x-8 lg:grid-cols-[max-content_1fr_max-content]",
              "xl:gap-x-12.5"
            )}
          >
            <div
              className={cn(
                "flex flex-col  gap-y-5",
                "lg:col-start-3 lg:justify-between"
              )}
            >
              <Logo className={cn("text-xl", "lg:text-3xl")} />
              <div
                className={cn("flex flex-col font-semibold", "md:mb-[17px]")}
              >
                <Link
                  className={cn("text-xl text-neutral-200", "lg:text-2xl")}
                  href="tel:+74991108276"
                >
                  +7 (499) 110-82-76
                </Link>
                <Link
                  className={cn("text-neutral-500", "xl:text-lg")}
                  href="mailto:yourcodereview@gmail.com"
                >
                  yourcodereview@gmail.com
                </Link>
              </div>
            </div>
            <div
              className={cn(
                "grid grid-cols-[max-content_max-content] gap-x-[23px] text-neutral-100",
                "md:grid-cols-1 md:grid-rows-[max-content_max-content] md:gap-x-0 md:gap-y-3 md:row-span-2",
                "lg:grid-cols-[max-content_max-content] lg:grid-rows-1 lg:gap-x-[23px]",
                "lg:gap-x-[50px] md:row-start-1 lg:text-lg"
              )}
            >
              <div
                className={cn(
                  "flex flex-col gap-y-3 leading-[18px]",
                  "lg:leading-[22px]"
                )}
              >
                <Link href="">Программа и тестирование</Link>
                <Link href="">Тарифы</Link>
                <Link href="">Команда</Link>
                <Link href="">Блог</Link>
                <Link href={routes.aboutUs}>О нас</Link>
              </div>
              <div className="flex flex-col gap-y-[10px]">
                <Link href="">Вакансии</Link>
                <Link href="">Запись</Link>
                <Link href="">Отзывы</Link>
                <Link href="">Вопросы и ответы</Link>
              </div>
            </div>
            <button
              className={cn(
                "bg-neutral-10/5 w-full rounded-lg p-[15px] text-neutral-100 font-medium flex flex-col items-center gap-y-7.5 leading-[18px]",
                "md:col-start-2",
                "lg:bg-neutral-800 lg:row-start-1 lg:w-[156px]"
              )}
            >
              <span className="text-neutral-100 ">
                На какую зарплату
                <br className="block lg:hidden" /> я могу претендовать?
              </span>
              <span className="text-neutral-500">Пройти тест</span>
            </button>
          </div>
          <div
            className={cn(
              "flex flex-col items-center gap-y-[15px]",
              "lg:flex-row-reverse lg:justify-between lg:gap-y-0 lg:text-lg"
            )}
          >
            <div className="flex items-center gap-x-2.5">
              <Link href="#">
                <TelegramIcon />
              </Link>
              <Link href="#">
                <YoutubeIcon />
              </Link>
              <Link href="#">
                <LinkedinIcon />
              </Link>
            </div>
            <div className="flex items-center gap-x-2.5">
              <Link href="#">Политика конфиденциальности</Link>
              <div className="w-[5px] h-[5px] bg-neutral-500 rounded-full"></div>
              <Link href="#">Оферта</Link>
            </div>
          </div>
          <hr className="border-neutral-700 mt-5 mb-[15px]" />
          <div
            className={cn(
              "flex flex-col items-center gap-y-5",
              "lg:flex-row-reverse lg:justify-between lg:items-start"
            )}
          >
            <div className="flex items-center gap-x-[10px] text-neutral-200 tracking-[-0.5x]">
              <DuckIcon withGradient />
              junior for juniors
            </div>
            <div
              className={cn("text-neutral-500 text-center", "lg:text-left ")}
            >
              ИП Примак Максим Андреевич <br />
              ИНН 772142877813 ОГРН 322774600410191
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
