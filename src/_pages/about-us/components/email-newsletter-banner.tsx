const Paragraph = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <div className="leading-[20px] tracking-[-0.8px] text-center lg:text-lg lg:leading-[22px]">
    <p className="font-semibold">{title}</p>
    <p>{subtitle}</p>
  </div>
);

export const EmailNewsletterBanner = () => (
  <div className="rounded-[10px] p-px gradient-tertiary text-nowrap">
    <div className="flex flex-col items-center gap-y-4 bg-neutral-10 px-[15px] pt-[30px] pb-5 rounded-[calc(10px-1px)] h-full lg:min-h-[280px]">
      <Paragraph title="Email-рассылка по базе" subtitle="20K+ подписчиков" />
      <div className="gradient-tertiary h-[1px] w-full" />
      <Paragraph title="Своя база 30.000+" subtitle="IT-специалистов" />
      <p className="font-semibold leading-[16px] tracking-[-1px] mt-auto lg:text-2xl lg:leading-[28px]">
        Ещё охваты
      </p>
    </div>
  </div>
);
