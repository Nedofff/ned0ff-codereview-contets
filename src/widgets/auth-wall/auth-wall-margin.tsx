import { getIsAuth } from "@/core/auth-utils";

export const AuthWallMargin = ({ children }: { children: React.ReactNode }) => {
  if (getIsAuth()) {
    return children;
  }

  return <div className="mb-15.5 pb-6.5 md:mb-14 md:pb-1.5">{children}</div>;
};
