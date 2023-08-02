import type { Meta, StoryObj } from "@storybook/react";
import OptionsDropdownComp from "./OptionsDropdown";

const meta: Meta<typeof OptionsDropdownComp> = {
	title: "Widget",
	component: OptionsDropdownComp,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		children: {
			table: {
				disable: true,
			},
		},
		onRemove: {
			table: {
				disable: true,
			},
		},
	},
};
export default meta;

type Story = StoryObj<typeof OptionsDropdownComp>;

export const OptionsDropdown: Story = {
	args: {
		children: <button className="bg-blue-600 rounded-md p-2 text-white">Show Options</button>,
	},
};
