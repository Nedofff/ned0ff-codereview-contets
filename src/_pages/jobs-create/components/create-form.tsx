"use client";
import { authCookieService } from "@/core/cookie/auth-cookie";
import { getVacanciesApi, VacancyCreate } from "@/data/vacancies";
import { Button, Checkbox, Input, Textarea } from "@/ui-kit";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

type CreateFormFields = {
  title: string;
  description: string;
  salary: string;
  city: string;
  company: string;
  telegram: string;
  email: string;
  isInternship: boolean;
  isRemote: boolean;
};

export const CreateForm = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<VacancyCreate>();
  const vacanciesApi = getVacanciesApi(authCookieService.getToken);

  const onSubmit = (data: VacancyCreate) => {
    vacanciesApi.createVacancy(data);
    router.push("/jobs");
  };

  return (
    <form className="flex flex-col gap-y-4" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Заголовок вакансии"
        withIndicator
        className="mt-1"
        {...register("title")}
      />
      <Textarea
        className="mt-1 h-[415px]"
        label="Описание вакансии"
        {...register("description")}
      />

      <Input label="Зарплата" className="mt-1" {...register("salary")} />
      <div className="space-y-3 mt-1">
        <Checkbox label="Стажировка" {...register("internship")} />
        <Checkbox label="Удаленно" {...register("remote")} />
      </div>
      <Input label="Город" className="mt-5" {...register("location")} />
      <Input label="Компания" className="mb-1" {...register("companyName")} />
      <div className="flex space-x-[15px]">
        <Input label="Telegram" {...register("url")} />
        <Input label="Почта" {...register("source")} />
      </div>
      <Button variant="filter" className="mt-[15px]" fullWidth>
        Добавить вакансию
      </Button>
    </form>
  );
};
