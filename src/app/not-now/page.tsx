import { routes } from "@/core/router";
import { InDevelopPage } from "@/widgets/in-develop";

export default function NotNowPage() {
  return (
    <InDevelopPage href={routes.home} linkText="На главную">
      Мы работаем над этой страницей.
      <br />
      Скоро здесь будет что-то интересное!
    </InDevelopPage>
  );
}
