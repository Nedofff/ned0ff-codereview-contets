import { cn } from "@/core/utils";
import {
  FiltersGroup,
  type FiltersGroupProps,
} from "./components/filters-group";
import { SeoKey } from "@/ui-kit";
import { AuthWall, AuthWallMargin } from "../auth-wall/";
import {
  PaginationClient,
  type PaginationClientProps,
} from "./components/pagination-client";
import { WithCategory } from "./components/with-category";

export const CollectionPageLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div className={cn("w-full grid grid-cols-1 gap-y-[15px]", "md:gap-y-5")}>
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
    <WithCategory>{children}</WithCategory>
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
  <section className="md:mb-[5px] z-10">
    <FiltersGroup {...props} />
  </section>
);

CollectionPageLayout.Content = ({
  children,
  className,
  titleAuthWall,
}: {
  children: React.ReactNode;
  titleAuthWall: string;
  className?: string;
}) => (
  <section className={cn(className, "relative")}>
    {children}
    <AuthWall title={titleAuthWall} />
  </section>
);

CollectionPageLayout.Pagination = (
  props: Omit<PaginationClientProps, "className">
) => (
  <AuthWallMargin>
    <PaginationClient {...props} className="mb-[25px] md:mb-10" />
  </AuthWallMargin>
);

CollectionPageLayout.SeoKeys = ({ seoKeys }: { seoKeys: string[] }) => (
  <div className="flex flex-wrap gap-2 md:justify-center">
    {seoKeys.map((item, index) => (
      <SeoKey key={index}>{item}</SeoKey>
    ))}
  </div>
);
