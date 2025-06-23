import { cn } from "@/core/utils";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="pb-[50px] lg:pb-[80px] relative">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
            <Image
              src="/sofi.png"
              alt="Ассистент по поиску работы"
              width={96}
              height={96}
              sizes="96px"
              quality={85}
              className="w-full h-full object-cover"
              draggable={false}
              priority
              placeholder="empty"
            />
          </div>
        </div>
        <h1
          className={cn(
            "text-3xl font-bold text-gray-900 mb-5 -tracking-[1px]",
            "lg:text-[50px]"
          )}
        >
          Твой Ассистент
          <br />
          по поиску работы
        </h1>
        <p
          className={cn(
            "text-lg font-wix-display text-gray-600 px-4 max-w-[400px] mx-auto",
            "lg:text-[22px] lg:px-0 "
          )}
        >
          Я собрала для тебя все в одном месте, чтобы ты смог быстро найти
          работу
        </p>
      </div>
    </section>
  );
}
