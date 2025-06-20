"use client";
import { Button, Input, PasswordInput } from "@/ui-kit";
import { useForm } from "react-hook-form";
import { FormLayout } from "./layout";
import { LoginFields } from "../auth.types";

export const LoginForm = ({
  goToRegister,
  onSuccess,
}: {
  goToRegister: () => void;
  onSuccess: () => void;
}) => {
  const { register, handleSubmit } = useForm<LoginFields>();

  const onSubmit = (data: LoginFields) => {
    console.log(data);
    onSuccess();
  };

  return (
    <FormLayout onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Почта"
        type="email"
        placeholder="example@mail.ru"
        {...register("email")}
      />
      <div className="text-left">
        <PasswordInput
          label="Пароль"
          placeholder="****"
          {...register("password")}
        />
        <button
          type="button"
          className="text-neutral-600 text-base hover:text-neutral-800 mt-2"
        >
          Забыли пароль?
        </button>
      </div>

      <Button type="submit" fullWidth>
        Войти
      </Button>

      <div className="text-center">
        <button
          type="button"
          className="text-neutral-600 text-lg font-medium"
          onClick={goToRegister}
        >
          Ещё нет аккаунта?{" "}
          <span className="text-primary-500">Регистрация</span>
        </button>
      </div>
    </FormLayout>
  );
};
