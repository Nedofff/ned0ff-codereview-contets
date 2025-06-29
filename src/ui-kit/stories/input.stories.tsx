import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "../components/input";
const meta = {
  title: "Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number"],
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof meta>;
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
export const Default: Story = {
  args: {
    placeholder: "Введите текст...",
  },
};
export const WithLabel: Story = {
  args: {
    label: "Название",
    placeholder: "Введите имя...",
  },
};
export const WithError: Story = {
  args: {
    label: "Email",
    placeholder: "user@example.com",
    errors: "Неправильный формат email",
    type: "email",
  },
};
export const WithLeftIcon: Story = {
  args: {
    label: "Поиск",
    placeholder: "Найти...",
    leftIcon: <SearchIcon />,
  },
};
export const WithRightIcon: Story = {
  args: {
    label: "Пароль",
    type: "password",
    placeholder: "Введите пароль",
    rightIcon: (
      <button type="button" className="text-neutral-400 hover:text-neutral-600">
        <EyeIcon />
      </button>
    ),
  },
};
export const WithBothIcons: Story = {
  args: {
    label: "Поиск пароля",
    type: "password",
    placeholder: "Поиск...",
    leftIcon: <SearchIcon />,
    rightIcon: (
      <button type="button" className="text-neutral-400 hover:text-neutral-600">
        <EyeIcon />
      </button>
    ),
  },
};
export const Success: Story = {
  args: {
    label: "Email",
    placeholder: "user@example.com",
    errors: "Email корректный",
    type: "email",
  },
};
export const Disabled: Story = {
  args: {
    label: "Заблокированное поле",
    placeholder: "Недоступно для редактирования",
    errors: "Это поле временно заблокировано",
    disabled: true,
    value: "test",
  },
};
