import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "../components/button";
import { PopupMenu } from "@/widgets/main-layout/components/popup-menu";
const meta = {
  title: "PopupMenu",
  component: PopupMenu,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      control: "text",
    },
  },
} satisfies Meta<typeof PopupMenu>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    children: "lorem ipsum dolor sit amet",
    trigger: <Button>Наведи на меня</Button>,
  },
  parameters: {
    docs: {
      description: {
        story: "Попап появляется сверху от элемента при наведении мыши",
      },
    },
  },
};
