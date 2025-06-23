"use client";

import { selectByAuth } from "@/core/auth";
import { noSsrImport } from "@/core/no-ssr-import";
import { Button, ButtonLink } from "@/ui-kit";
import { openAuthModal } from "@/widgets/main-layout";

const ButtonSideActionClient = ({ href }: { href: string }) =>
  selectByAuth({
    ifAuth: (
      <ButtonLink href={href} className="bg-neutral-200 hover:bg-neutral-300">
        Откликнуться
      </ButtonLink>
    ),
    ifNotAuth: (
      <Button variant="base" onClick={() => openAuthModal("login")}>
        Откликнуться
      </Button>
    ),
  });

export const ButtonSideAction = noSsrImport(ButtonSideActionClient, () => (
  <Button variant="base" onClick={() => openAuthModal("login")}>
    Откликнуться
  </Button>
));
