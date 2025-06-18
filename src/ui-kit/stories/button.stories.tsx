import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { Button } from "../components/button";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["accent", "base", "second", "filter"],
    },
    disabled: {
      control: "boolean",
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Accent: Story = {
  args: {
    variant: "accent",
    children: "Текст кнопки",
  },
};

export const Base: Story = {
  args: {
    variant: "base",
    children: "Текст кнопки",
  },
};

export const Second: Story = {
  args: {
    variant: "second",
    children: "Текст кнопки",
  },
};

export const Filter: Story = {
  args: {
    variant: "filter",
    children: "Текст кнопки",
  },
};
