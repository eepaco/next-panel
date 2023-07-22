import type { Meta, StoryObj } from "@storybook/react";
import AccordionLink from "./AccordionLink";

const meta: Meta<typeof AccordionLink> = {
	title: "Sidebar/Accordion Link",
	component: AccordionLink,
	decorators: [(story) => <aside className="w-64">{story()}</aside>],
};
export default meta;

type Story = StoryObj<typeof AccordionLink>;

export const Link: Story = {
	args: {
		href: "/analyze",
		children: "Analyze",
	},
};
