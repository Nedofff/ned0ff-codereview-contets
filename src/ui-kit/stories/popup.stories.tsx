import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { Popup } from "../components/popup";
import { Button } from "../components/button";
import { Input } from "../components/input";

const Stub = () => null;

const meta = {
  title: "Popup",
  component: Stub,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Stub>;

export default meta;
type Story = StoryObj<typeof meta>;

// SVG иконки для примера
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
      stroke="currentColor"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EyeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M2.5 10C2.5 10 5.83333 4.16667 10 4.16667C14.1667 4.16667 17.5 10 17.5 10C17.5 10 14.1667 15.8333 10 15.8333C5.83333 15.8333 2.5 10 2.5 10Z"
      stroke="currentColor"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
      stroke="currentColor"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function PopupWithForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Открыть форму</Button>
      <Popup isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-6">Авторизация</h2>
          <div className="space-y-4">
            <Input
              label="Поиск пользователя"
              placeholder="Найти..."
              leftIcon={<SearchIcon />}
            />
            <Input label="Email" type="email" placeholder="example@mail.ru" />
            <Input
              label="Пароль"
              type={showPassword ? "text" : "password"}
              placeholder="****"
              rightIcon={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-neutral-400 hover:text-neutral-600"
                >
                  <EyeIcon />
                </button>
              }
            />
            <Button className="w-full mt-6">Войти</Button>
          </div>
        </div>
      </Popup>
    </div>
  );
}

export const Default: Story = {
  args: {},
  render: () => <PopupWithForm />,
};

export const WithIcons: Story = {
  args: {},
  render: () => <PopupWithForm />,
};
