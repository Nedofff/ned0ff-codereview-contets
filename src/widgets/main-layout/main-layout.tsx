import { Footer } from "./components/footer";
import { TopMenu } from "./components/top-menu";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TopMenu />
      <main>{children}</main>
      <Footer />
    </>
  );
};
