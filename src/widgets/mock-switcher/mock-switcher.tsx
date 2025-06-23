"use client";
import { Portal, CrossIcon, Button } from "@/ui-kit";
import Link from "next/link";
import { useState } from "react";

export const MockSwitcher = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Portal>
      <div className="fixed bottom-5 left-5 z-50 px-2.5 rounded-xl flex items-center gap-2.5">
        {isOpen ? (
          <>
            <Link
              href="/mock"
              className="bg-neutral-100 text-primary-500 h-11.5 px-2.5 font-semibold rounded-full flex items-center justify-center"
            >
              Перейти на версию с мок данными
            </Link>
            <Button
              variant="base"
              className="rounded-full h-11.5"
              onClick={() => setIsOpen(false)}
            >
              <CrossIcon />
            </Button>
          </>
        ) : (
          <Button
            onClick={() => setIsOpen(true)}
            variant="base"
            className="text-2xl w-11.5 h-11.5 rounded-full"
          >
            !
          </Button>
        )}
      </div>
    </Portal>
  );
};
