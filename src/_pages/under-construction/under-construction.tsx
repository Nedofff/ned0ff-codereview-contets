import { routes } from "@/core/router";
import Link from "next/link";

const DefaultChildren = () => (
  <>
    Мы работаем над этой страницей.
    <br />
    Скоро здесь будет что-то интересное!
  </>
);

export const UnderConstructionPage = ({
  href,
  children,
  linkText,
}: {
  children?: React.ReactNode;
  linkText?: React.ReactNode;
  href?: string;
}) => (
  <div className="min-h-screen bg-white relative overflow-hidden">
    {/* Background effects */}
    <div className="inset-0 pointer-events-none">
      <div className="absolute top-20 left-20 w-60 h-60 bg-yellow-300 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute top-32 right-80 w-60 h-60 bg-pink-300 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-1/3 w-60 h-60 bg-blue-300 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-red-300 opacity-20 rounded-full blur-3xl"></div>
    </div>

    <section className="pt-32 pb-16 px-4 relative flex items-center justify-center ">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-300 via-pink-300 to-blue-300 opacity-80 flex items-center justify-center">
            <span className="text-7xl">🚧</span>
          </div>
        </div>

        <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          В разработке
        </h1>

        <p className="text-lg lg:text-xl text-gray-600 mb-8 px-4 lg:px-0">
          {children ?? <DefaultChildren />}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href={href ?? routes.home}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            {linkText ?? "На главную"}
          </Link>
        </div>
      </div>
    </section>
  </div>
);
