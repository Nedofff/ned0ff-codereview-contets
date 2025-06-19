import { cn } from "@/core/utils";
import { Pagination, type PaginationProps } from "@/ui-kit";
import {
  FiltersGroup,
  type FiltersGroupProps,
} from "./components/filters-group";

export const CollectionPageLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div className={cn("grid grid-cols-1 gap-y-[15px]", "md:gap-y-5")}>
    {children}
  </div>
);

CollectionPageLayout.TitleSection = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <section
    className={cn("mb-[15px] flex flex-col gap-y-2.5", "md:mb-7.5 md:gap-y-5")}
  >
    {children}
  </section>
);

CollectionPageLayout.Title = ({ children }: { children: React.ReactNode }) => (
  <h1
    className={cn(
      "text-2xl font-bold text-neutral-800 tracking-[-1px] leading-[28px]",
      "md:text-[50px] md:leading-[52px] ]"
    )}
  >
    {children}
  </h1>
);

CollectionPageLayout.Description = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <p
    className={cn(
      "font-wix-display font-medium text-sm text-neutral-700 leading-[18px]",
      "md:text-lg md:leading-[22px]"
    )}
  >
    {children}
  </p>
);

CollectionPageLayout.FiltersGroup = (props: FiltersGroupProps) => (
  <FiltersGroup {...props} className="md:mb-[5px]" />
);

CollectionPageLayout.Content = ({ children }: { children: React.ReactNode }) =>
  children;

CollectionPageLayout.Pagination = (
  props: Omit<PaginationProps, "className">
) => <Pagination {...props} className="mb-[25px] md:mb-10" />;

CollectionPageLayout.SeoKeys = ({ seoKeys }: { seoKeys: string[] }) =>
  seoKeys.map((item, index) => <div key={index}>{item}</div>);
