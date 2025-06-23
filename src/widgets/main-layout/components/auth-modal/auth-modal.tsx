"use client";
import { Button, Popup } from "@/ui-kit";
import {
  AuthLayout,
  InfoScreenLayout,
  SuccessLayout,
} from "./components/layout";
import { LoginForm } from "./components/login-form";
import { SignInForm } from "./components/signin-form";
import { Hearts } from "./components/hearts";
import { useAuthModal } from "./state/use-auth-modal";
import { Channels } from "./components/channels";
export function AuthModal() {
  const { isOpen, close, step, setStep } = useAuthModal();
  const renderContent = () => {
    switch (step) {
      case "login":
        return (
          <>
            <InfoScreenLayout>
              Вы готовы к большему. <br />
              Мы поможем начать.
            </InfoScreenLayout>
            <div className="flex-1">
              <LoginForm
                goToRegister={() => setStep("register")}
                onSuccess={() => setStep("success")}
              />
            </div>
          </>
        );
      case "register":
        return (
          <>
            <InfoScreenLayout>
              Вы готовы к большему. <br />
              Мы поможем начать.
            </InfoScreenLayout>
            <div className="flex-1">
              <SignInForm
                goToLogin={() => setStep("login")}
                onSuccess={() => setStep("success")}
              />
            </div>
          </>
        );
      case "success":
        return (
          <>
            <Channels />
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
              <Button
                fullWidth
                onClick={() => setStep("thanks")}
                className="md:mt-34.5"
              >
                Подписаться на каналы
              </Button>
            </SuccessLayout>
          </>
        );
      case "thanks":
        return (
          <>
            <InfoScreenLayout className="h-[532px]">
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
              <Button onClick={close} fullWidth className="md:mt-67.5">
                Подписаться на каналы
              </Button>
            </SuccessLayout>
          </>
        );
      default:
        return null;
    }
  };
  return (
    <Popup isOpen={isOpen} onClose={close}>
      <AuthLayout>{renderContent()}</AuthLayout>
    </Popup>
  );
}
