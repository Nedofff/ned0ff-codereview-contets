import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Checkbox } from "../components/checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Checkbox",
  component: Checkbox,
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

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox label="Default" variant="default" />
      <Checkbox label="Checked" variant="default" checked />
      <Checkbox label="Disabled" variant="default" disabled />
      <Checkbox label="Disabled Checked" variant="default" checked disabled />
      <Checkbox label="Error" variant="error" />
    </div>
  ),
};
