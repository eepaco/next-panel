import type { Meta, StoryObj } from "@storybook/react";
import AccordionTrigger from "./AccordionTrigger";
import { mdiChartBoxOutline, mdiSpeedometer } from "@mdi/js";
import AccordionItem from "./AccordionItem";
import AccordionRoot from "./AccordionRoot";

const meta: Meta<typeof AccordionTrigger> = {
	title: "Sidebar/Accordion Trigger",
	component: AccordionTrigger,
	argTypes: {
		className: {
			control: "text",
		},
	},
	decorators: [
		(story) => (
			<aside className="w-64">
				<AccordionRoot>
					<AccordionItem value="hello">{story()}</AccordionItem>
				</AccordionRoot>
			</aside>
		),
	],
};
export default meta;

type Story = StoryObj<typeof AccordionTrigger>;

export const RootTrigger: Story = {
	args: {
		isRoot: true,
		showTitle: true,
		icon: mdiSpeedometer,
		children: "Analyze",
	},
};

export const InnerTrigger: Story = {
	args: {
		isRoot: false,
		showTitle: true,
		icon: mdiChartBoxOutline,
		children: "Inner Trigger",
	},
};
