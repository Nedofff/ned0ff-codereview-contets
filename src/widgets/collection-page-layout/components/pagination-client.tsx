"use client";
import { Pagination, PaginationProps } from "@/ui-kit";
import { useRouter } from "next/navigation";

export type PaginationClientProps = Omit<PaginationProps, "onPageChange">;

export const PaginationClient = (props: PaginationClientProps) => {
  const router = useRouter();

  return (
    <Pagination
      {...props}
      onPageChange={(page) => {
        router.push(`?page=${page}`);
      }}
    />
  );
};
