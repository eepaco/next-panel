import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "./Navbar";

const meta: Meta<typeof Navbar> = {
	title: "Navbar",
	component: Navbar,
	parameters: {
		layout: "fullscreen",
	},
};
export default meta;

type Story = StoryObj<typeof Navbar>;

export const NavigationMenu: Story = {
	args: {},
};
