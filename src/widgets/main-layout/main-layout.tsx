import { AuthModal } from "./components/auth-modal";
import { BackgroundGradient } from "./components/background-gradient";
import { Footer } from "./components/footer";
import { TopMenu } from "./components/top-menu";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TopMenu />
      <main className="px-[15px] max-w-[1052px] mx-auto bg-neutral-10 pt-[108px] md:pt-[176px] pb-5">
        <BackgroundGradient />
        {children}
      </main>
      <AuthModal />
      <Footer />
    </>
  );
};
