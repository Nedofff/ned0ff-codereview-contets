"use client";
import { cn } from "@/core/utils";
import { Button, Checkbox, Input } from "@/ui-kit";
import { useRouter } from "next/navigation";
import { useId } from "react";
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
  const id = useId();
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
      <div className="mt-1">
        <label
          className={cn("block font-medium mb-2 font-wix-display")}
          htmlFor={id}
        >
          Описание вакансии
        </label>
        <textarea
          {...register("description")}
          className={cn(
            " h-[415px] resize-none",
            "w-full p-[15px] border border-neutral-300 rounded-xl transition-colors duration-100",
            "font-wix-display text-lg placeholder:text-neutral-300",
            "hover:border-neutral-400",
            "focus:border-secondary-500 focus:ring-2 focus:ring-secondary-500 focus:outline-none",
            "disabled:border-neutral-200 disabled:bg-neutral-100"
          )}
        />
      </div>

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
