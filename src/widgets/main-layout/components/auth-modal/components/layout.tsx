import Image from "next/image";
import { HhLogoIcon, TelegramColoredIcon, Logo, ButtonLink } from "@/ui-kit";
import { externalLinks } from "@/core/router";
import { cn } from "@/core/utils";
export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid h-full w-full max-h-[90vh] grid-cols-1 items-center rounded-3xl overflow-hidden md:grid-cols-[380px_1fr] lg:grid-cols-[19fr_21fr]">
      {children}
    </div>
  );
};
export const InfoScreenLayout = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "w-full md:w-[380px] h-[200px] md:h-full bg-[#F5F5F5] relative overflow-hidden",
        className
      )}
    >
      <div className="relative h-full flex flex-col">
        {children && (
          <div className="absolute top-4 md:top-8 left-4 md:left-8 right-4 md:right-8 z-20">
            <h2 className="text-[18px] md:text-[22px] font-medium leading-[22px] md:leading-[26px] tracking-[-0.045em] text-center text-black">
              {children}
            </h2>
          </div>
        )}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-[120px] h-[120px] md:w-[276px] md:h-[276px] rounded-full overflow-hidden">
            <Image
              src="/sofi.png"
              alt="Profile"
              fill
              className="object-cover object-center"
              draggable={false}
              priority
            />
          </div>
        </div>
        <div className="absolute bottom-4 md:bottom-8 left-1/2 md:left-[115px] transform -translate-x-1/2 md:transform-none">
          <Logo />
        </div>
      </div>
    </div>
  );
};
export const FormLayout = ({
  children,
  onSubmit,
}: {
  children: React.ReactNode;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
}) => {
  return (
    <div className="p-4 md:p-8 w-full flex-1 flex flex-col justify-center">
      <form
        onSubmit={onSubmit}
        className="max-w-[360px] mx-auto space-y-4 w-full"
      >
        <div className="space-y-2">
          <ButtonLink href={externalLinks.botTelegram()}>
            <TelegramColoredIcon /> Войти через Telegram
          </ButtonLink>
          <ButtonLink href={externalLinks.loginHh}>
            <HhLogoIcon /> Войти через HH.ru
          </ButtonLink>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-px bg-neutral-300" />
          <span className="text-neutral-600 text-base">или</span>
          <div className="flex-1 h-px bg-neutral-300" />
        </div>
        {children}
      </form>
    </div>
  );
};
export const SuccessLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-1 p-[30px] flex flex-col items-center md:h-full md:items-start md:justify-start">
      <div className="max-w-[360px] space-y-5">{children}</div>
    </div>
  );
};
SuccessLayout.Title = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-[24px] font-bold leading-[28px] tracking-[-0.042em] text-center text-black">
    {children}
  </h2>
);
SuccessLayout.Text = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[#232325] text-[18px] leading-[22px] tracking-[-0.028em] text-left">
    {children}
  </p>
);
SuccessLayout.Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <button
    onClick={onClick}
    className="w-full bg-gradient-to-r from-[#2093FE] to-[#C217FE] text-white text-[18px] font-medium leading-[22px] tracking-[-0.028em] py-[14px] px-5 rounded-[18px] backdrop-blur-[8px] hover:opacity-90 transition-opacity"
  >
    {children}
  </button>
);
