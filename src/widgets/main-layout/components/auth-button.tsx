"use client";
import { Button, ProfileIcon } from "@/ui-kit";
import { openAuthModal } from "./auth-modal";
import { selectByAuth, logout } from "@/core/auth";

export const AuthButton = () => {
  const { action, text } = selectByAuth({
    ifAuth: {
      action: () => logout(),
      text: "Выйти",
    },
    ifNotAuth: {
      action: () => openAuthModal("login"),
      text: "Войти",
    },
  });

  return (
    <Button
      onClick={action}
      variant="ghost"
      className="flex items-center gap-2 h-min"
    >
      <ProfileIcon />{" "}
      <span className="hidden md:inline text-lg leading-[22px]">{text}</span>
    </Button>
  );
};
