import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Switch } from "../components/switch";
import { useState } from "react";

const meta = {
  title: "Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    label: {
      control: "text",
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithLabel: Story = {
  args: {
    label: "Удаленно",
  },
  render: (args) => {
    const [checked, setChecked] = useState(false);

    return <Switch {...args} checked={checked} onChange={setChecked} />;
  },
};

export const WithLabelChecked: Story = {
  args: {
    label: "Удаленно",
  },
  render: (args) => {
    const [checked, setChecked] = useState(true);

    return <Switch {...args} checked={checked} onChange={setChecked} />;
  },
};

export const WithLabelDisabled: Story = {
  args: {
    label: "Удаленно",
    disabled: true,
  },
  render: (args) => {
    const [checked, setChecked] = useState(false);

    return <Switch {...args} checked={checked} onChange={setChecked} />;
  },
};
