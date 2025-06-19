"use client";
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
  const { register, handleSubmit } = useForm<CreateFormFields>();

  const onSubmit = (data: CreateFormFields) => {
    console.log(data);
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
        <Checkbox label="Стажировка" {...register("isInternship")} />
        <Checkbox label="Удаленно" {...register("isRemote")} />
      </div>
      <Input label="Город" className="mt-5" {...register("city")} />
      <Input label="Компания" className="mb-1" {...register("company")} />
      <div className="flex space-x-[15px]">
        <Input label="Telegram" {...register("telegram")} />
        <Input label="Почта" {...register("email")} />
      </div>
      <Button variant="filter" className="mt-[15px]" fullWidth>
        Добавить вакансию
      </Button>
    </form>
  );
};
