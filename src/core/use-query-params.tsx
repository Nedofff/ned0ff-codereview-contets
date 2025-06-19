import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useQueryParams = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const createQueryParams = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);
    return params.toString();
  };

  const setSearchParams = (name: string, value: string) => {
    const params = createQueryParams(name, value);
    router.push(pathname + "?" + params);
  };

  return {
    searchParams,
    setSearchParams,
  };
};
