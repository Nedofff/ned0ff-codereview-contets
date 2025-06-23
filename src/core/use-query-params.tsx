import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { createQueryParams } from "./create-query-params";

export const useQueryParams = (scroll: boolean = true) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const setSearchParams = (name: string, value: string) => {
    const params = createQueryParams(searchParams, name, value);
    router.push(pathname + "?" + params, { scroll });
  };

  return {
    searchParams,
    setSearchParams,
  };
};
