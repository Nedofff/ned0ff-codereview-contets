"use client";
import { authCookieService } from "@/core/cookie/auth-cookie";
import { routes } from "@/core/router";
import { getVacanciesApiNext } from "@/data/vacancies/vacancies-api";
import { Button, Checkbox, Input, Textarea } from "@/ui-kit";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

type Fields = {
  title: string;
  description: string;
  internship: boolean;
  remote: boolean;
  location: string;
  companyName: string;
  url: string;
  source: string;
  salary: string | null;
};

export const CreateForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<Fields>({
    criteriaMode: "all",
  });
  const vacanciesApi = getVacanciesApiNext(authCookieService.getToken);
  const onSubmit = async (data: Fields) => {
    try {
      await vacanciesApi.createVacancy({
        ...data,
        salary: data.salary ?? null,
        externalId: null,
        specialty: "Backend Development",
        image: null,
        datePublication: new Date().toISOString(),
      });
      router.push(routes.vacancies);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError("root", {
          message: `Ошибка при создании вакансии ${err.message}`,
        });
      }
    }
  };
  const requiredRegister = (name: keyof Fields) =>
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
        {...register("salary")}
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
      {errors.root?.message && (
        <p className="font-wix-display font-medium text-quaternary-400 -mt-2.5">
          {errors.root?.message}
        </p>
      )}
    </form>
  );
};
