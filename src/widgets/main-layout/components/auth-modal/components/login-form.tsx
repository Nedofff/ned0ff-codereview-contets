"use client";
import { Button, Input, PasswordInput } from "@/ui-kit";
import { useForm } from "react-hook-form";
import { FormLayout } from "./layout";
import { LoginFields } from "../auth.types";
import { logger } from "@/core/logger";
import { login } from "@/core/auth";

export const LoginForm = ({
  goToRegister,
  onSuccess,
}: {
  goToRegister: () => void;
  onSuccess: () => void;
}) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: {
      errors: { root: loginError },
    },
  } = useForm<LoginFields>();

  const onSubmit = async (data: LoginFields) => {

    try {
      await login({
        username: data.email,
        password: data.password,
      });

      onSuccess();
    } catch (error) {
      logger.error("login auth-api error", error);
      setError("root", { message: "Неверный email или пароль" });
    }
  };

  return (
    <FormLayout onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Почта"
        type="text"
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

      {loginError && (
        <p className="text-quaternary-400 text-center -mt-3">
          {loginError.message}
        </p>
      )}

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
