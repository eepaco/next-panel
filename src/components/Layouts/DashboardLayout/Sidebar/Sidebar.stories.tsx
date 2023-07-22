import type { Meta, StoryObj } from "@storybook/react";
import Sidebar from "./Sidebar";

const meta: Meta<typeof Sidebar> = {
	title: "Sidebar/Aside",
	component: Sidebar,
};
export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Aside: Story = {
	args: {
		isSidebarOpen: true,
		isSidebarHoverDisabled: true,
	},
};
