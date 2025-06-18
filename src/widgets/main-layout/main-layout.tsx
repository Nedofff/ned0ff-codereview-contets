import { Footer } from "./components/footer";
import { TopMenu } from "./components/top-menu";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TopMenu />
      <main className="px-[15px] max-w-[1020px] mx-auto bg-neutral-10">
        {children}
      </main>
      <Footer />
    </>
  );
};
