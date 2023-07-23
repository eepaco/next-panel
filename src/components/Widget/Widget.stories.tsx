import type { Meta, StoryObj } from "@storybook/react";
import WidgetComp from "./Widget";

const meta: Meta<typeof WidgetComp> = {
	title: "Widget",
	component: WidgetComp,
	decorators: [(story) => <div className="w-[20rem]">{story()}</div>],
};
export default meta;

type Story = StoryObj<typeof WidgetComp>;

export const Widget: Story = {
	args: {
		title: "Widget title",
		children: <h2>my fake content is here</h2>,
	},
};
