"use client";

import React, { useState } from "react";
import { Button } from "../../ui-kit/components/button";
import { Popup } from "../../ui-kit/components/popup";
import {
  AuthLayout,
  InfoScreenLayout,
  SuccessLayout,
} from "./components/layout";
import { LoginForm } from "./components/login-form";
import { SignInForm } from "./components/signin-form";
import { Hearts, Sd } from "./components/hearts";
import { ProfileIcon } from "@/ui-kit";

type AuthStep = "login" | "register" | "success" | "thanks";

export function AuthModal() {
  const [step, setStep] = useState<AuthStep>("login");
  const [isOpen, setIsOpen] = useState(false);

  const renderContent = () => {
    switch (step) {
      case "login":
        return (
          <>
            <InfoScreenLayout>
              Вы готовы к большему. <br />
              Мы поможем начать.
            </InfoScreenLayout>
            <LoginForm
              goToRegister={() => setStep("register")}
              onSuccess={() => setStep("success")}
            />
          </>
        );
      case "register":
        return (
          <>
            <InfoScreenLayout>
              Вы готовы к большему. <br />
              Мы поможем начать.
            </InfoScreenLayout>
            <SignInForm
              goToLogin={() => setStep("login")}
              onSuccess={() => setStep("success")}
            />
          </>
        );
      case "success":
        return (
          <>
            <Sd />
            <SuccessLayout>
              <SuccessLayout.Title>
                Ты успешно авторизовался!
              </SuccessLayout.Title>
              <SuccessLayout.Text>
                На нашем сервисе собрано больше 1.000 вопросов с собеседований,
                сотни тестовых заданий, контакты рекрутеров и многое другое.
              </SuccessLayout.Text>
              <SuccessLayout.Text>
                Все это мы отдаем тебе бесплатно, взамен на подписку на наши
                телеграм каналы. Именно они помогают монетизировать нашу
                платформу и обновлять весь наш контент.
              </SuccessLayout.Text>
              <Button>Подписаться на каналы</Button>
            </SuccessLayout>
          </>
        );
      case "thanks":
        return (
          <>
            <InfoScreenLayout>
              <Hearts />
            </InfoScreenLayout>
            <SuccessLayout>
              <SuccessLayout.Title>Спасибо за подписки!</SuccessLayout.Title>
              <SuccessLayout.Text>
                Доступ к платформе полностью открыт и будет всегда доступен для
                твоего аккаунта.
              </SuccessLayout.Text>
              <SuccessLayout.Text>
                Желаем тебе быстрого поиска работы 🩵
              </SuccessLayout.Text>
              <Button>Подписаться на каналы</Button>
            </SuccessLayout>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        variant="ghost"
        className="flex items-center gap-2"
      >
        <ProfileIcon /> <span className="hidden md:inline text-lg">Войти</span>
      </Button>

      <Popup isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <AuthLayout>{renderContent()}</AuthLayout>
      </Popup>
    </>
  );
}
