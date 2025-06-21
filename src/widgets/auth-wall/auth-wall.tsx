"use client";
import { Button } from "@/ui-kit";
import { openAuthModal } from "../main-layout";
import { cn } from "@/core/utils";
import { selectByAuth } from "@/core/auth";

export const AuthWall = ({ title }: { title: string }) =>
  selectByAuth({
    ifAuth: null,
    ifNotAuth: <AuthWallInner title={title} />,
  });

const AuthWallInner = ({ title }: { title: string }) => (
  <div className="z-20 gradient-auth-wall h-80 absolute -bottom-27 w-full flex items-end justify-center">
    <div className="flex flex-col items-center pb-7.5">
      <p className="text-[20px] leading-[24px] font-bold mb-[15px] text-center md:mb-[10px] md:text-[22px] md:leading-[26px]">
        {title}
      </p>
      <p
        className={cn(
          "text-sm leading-[18px] font-medium text-neutral-500 mb-5 text-center",
          "sm:text-center",
          "md:mb[25px] md:text-lg md:leading-[22px] md:max-content md:mx-auto"
        )}
      >
        Сервис можно использовать бесплатно, без ограничений.{" "}
        <br className="hidden md:block" /> Чтобы получить полный доступ, вам
        необходимо зарегистрироваться.
      </p>
      <Button className="md:w-max" onClick={() => openAuthModal("register")}>
        Зарегистрироваться
      </Button>
    </div>
  </div>
);
