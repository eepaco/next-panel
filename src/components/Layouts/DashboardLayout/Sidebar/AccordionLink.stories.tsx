import type { Meta, StoryObj } from "@storybook/react";
import AccordionLinkComp from "./AccordionLink";

const meta: Meta<typeof AccordionLinkComp> = {
	title: "Sidebar",
	component: AccordionLinkComp,
	decorators: [(story) => <aside className="w-64">{story()}</aside>],
};
export default meta;

type Story = StoryObj<typeof AccordionLinkComp>;

export const AccordionLink: Story = {
	args: {
		href: "/analyze",
		children: "Analyze",
	},
};
