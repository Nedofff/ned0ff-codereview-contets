import { cn } from "@/core/utils";
import Link from "next/link";

export const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn("bg-neutral-100 rounded-lg p-[15px] relative", className)}
    >
      {children}
    </div>
  );
};

Card.Link = ({ title, url }: { title: string; url: string }) => (
  <Link href={url} aria-label={title} className="absolute inset-0" />
);
