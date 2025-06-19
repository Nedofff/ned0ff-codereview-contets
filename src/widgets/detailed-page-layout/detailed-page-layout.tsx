import { SeoKey } from "@/ui-kit";

export const DetailedPageLayout = ({
  children,
  seoKeys,
}: {
  children: [React.ReactNode, React.ReactNode];
  seoKeys: string[];
}) => {
  return (
    <section>
      <div className="grid grid-rows-[max-content_max-content] gap-y-7.5 md:gap-y-0 md:gap-x-15 md:grid-rows-1 md:grid-cols-[11fr_5fr]">
        {children}
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {seoKeys.map((key) => (
          <SeoKey key={key}>{key}</SeoKey>
        ))}
      </div>
    </section>
  );
};
