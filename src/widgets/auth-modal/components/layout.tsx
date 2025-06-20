import Image from "next/image";
import { HhLogoIcon, TelegramColoredIcon, Logo, ButtonLink } from "@/ui-kit";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid h-full w-full grid-cols-[19fr_21fr] rounded-3xl overflow-hidden">
      {children}
    </div>
  );
};

export const InfoScreenLayout = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return (
    <div className="w-[380px] h-full bg-[#F5F5F5] relative overflow-hidden hidden md:block">
      <div className="relative h-full flex flex-col">
        {children && (
          <div className="absolute top-8 left-8 right-8 z-20">
            <h2 className="text-[22px] font-medium leading-[26px] tracking-[-0.045em] text-center text-black">
              {children}
            </h2>
          </div>
        )}

        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-[276px] h-[276px] rounded-full overflow-hidden">
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

        {/* Логотип внизу */}
        <div className="absolute bottom-8 left-[115px]">
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
    <div className="flex-1 p-4 md:p-8">
      <form onSubmit={onSubmit} className="max-w-[360px] mx-auto space-y-4 ">
        <div className="space-y-2">
          <ButtonLink href="">
            <TelegramColoredIcon /> Войти через Telegram
          </ButtonLink>
          <ButtonLink href="">
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
    <div className="flex-1 p-[30px] flex flex-col justify-start">
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
