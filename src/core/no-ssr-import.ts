import dynamic, { DynamicOptionsLoadingProps } from "next/dynamic";

export const noSsrImport = <T>(
  Component: React.ComponentType<T>,
  renderLoader: (loadingProps?: DynamicOptionsLoadingProps) => React.ReactNode
) => {
  return dynamic(() => Promise.resolve(Component), {
    ssr: false,
    loading: (loadingProps) => renderLoader(loadingProps),
  });
};
