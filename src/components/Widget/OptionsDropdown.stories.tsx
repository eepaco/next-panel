import type { Meta, StoryObj } from "@storybook/react";
import WidgetComp from "./Widget";
import OptionsDropdownComp from "./OptionsDropdown";

const meta: Meta<typeof OptionsDropdownComp> = {
	title: "Widget",
	component: OptionsDropdownComp,
	parameters: {
		layout: "centered",
	},
};
export default meta;

type Story = StoryObj<typeof OptionsDropdownComp>;

export const OptionsDropdown: Story = {
	args: {
		children: <button className="bg-blue-600 rounded-md p-2 text-white">Show Options</button>,
	},
};
