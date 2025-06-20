"use client";
import { Button, ProfileIcon } from "@/ui-kit";
import { openAuthModal } from "./auth-modal";

export const AuthButton = () => (
  <Button
    onClick={openAuthModal}
    variant="ghost"
    className="flex items-center gap-2 h-min"
  >
    <ProfileIcon />{" "}
    <span className="hidden md:inline text-lg leading-[22px]">Войти</span>
  </Button>
);
