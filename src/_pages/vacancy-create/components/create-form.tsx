"use client";
import { authCookieService } from "@/core/cookie/auth-cookie";
import { routes } from "@/core/router";
import { getVacanciesApi, VacancyCreate } from "@/data/vacancies";
import { Button, Checkbox, Input, Textarea } from "@/ui-kit";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export const CreateForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VacancyCreate>({
    criteriaMode: "all",
  });
  const vacanciesApi = getVacanciesApi(authCookieService.getToken);

  const onSubmit = (data: VacancyCreate) => {
    vacanciesApi.createVacancy(data).then(() => {
      router.push(routes.vacancies);
    });
  };

  const requiredRegister = (name: keyof VacancyCreate) =>
    register(name, {
      required: "Не заполнено обязательное поле",
    });

  return (
    <form
      className="flex flex-col gap-y-4 space-y-1"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        label="Заголовок вакансии"
        withIndicator
        errors={errors.title?.message}
        {...requiredRegister("title")}
      />
      <Textarea
        className="mt-1 max-h-[415px] h-screen"
        label="Описание вакансии"
        errors={errors.description?.message}
        {...requiredRegister("description")}
      />
      {errors.description?.message && (
        <p className="font-wix-display font-medium text-quaternary-400 -mt-2.5">
          {errors.description?.message}
        </p>
      )}
      <Input
        errors={errors.salary?.message}
        label="Зарплата"
        {...requiredRegister("salary")}
      />
      <div className="space-y-3">
        <Checkbox label="Стажировка" {...register("internship")} />
        <Checkbox label="Удаленно" {...register("remote")} />
      </div>
      <Input
        label="Город"
        errors={errors.location?.message}
        className="mt-4"
        {...requiredRegister("location")}
      />
      <Input
        label="Компания"
        errors={errors.companyName?.message}
        {...requiredRegister("companyName")}
      />
      <div className="flex space-x-[15px]">
        <Input
          label="Telegram"
          errors={errors.url?.message}
          {...requiredRegister("url")}
        />
        <Input
          label="Почта"
          errors={errors.source?.message}
          {...requiredRegister("source")}
        />
      </div>
      <Button variant="filter" className="mt-[11px]" fullWidth>
        Добавить вакансию
      </Button>
    </form>
  );
};
