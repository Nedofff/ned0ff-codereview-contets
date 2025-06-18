import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { RadioButton } from "../components/radio-button";

const meta: Meta<typeof RadioButton> = {
  title: "RadioButton",
  component: RadioButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "error"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    checked: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Текст",
    variant: "default",
  },
};

export const Checked: Story = {
  args: {
    label: "Текст",
    variant: "default",
    checked: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    variant: "default",
  },
};

export const Disabled: Story = {
  args: {
    label: "Текст",
    variant: "default",
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: "Текст",
    variant: "default",
    checked: true,
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    label: "Текст",
    variant: "error",
  },
};

export const RadioGroup: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <RadioButton label="Вариант 1" name="group1" variant="default" />
      <RadioButton label="Вариант 2" name="group1" variant="default" />
      <RadioButton label="Вариант 3" name="group1" variant="default" />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <RadioButton label="Default" variant="default" />
      <RadioButton label="Checked" variant="default" checked />
      <RadioButton label="Disabled" variant="default" disabled />
      <RadioButton
        label="Disabled Checked"
        variant="default"
        checked
        disabled
      />
      <RadioButton label="Error" variant="error" />
    </div>
  ),
};
