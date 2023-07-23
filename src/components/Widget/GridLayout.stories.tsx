import type { Meta, StoryObj } from "@storybook/react";
import Widget from "./Widget";
import WidgetContainer from "./WidgetContainer";
import { Layout } from "react-grid-layout";

const meta: Meta<typeof WidgetContainer> = {
	title: "Widget",
	component: WidgetContainer,
};
export default meta;

type Story = StoryObj<typeof WidgetContainer>;

const initialLayouts = {
	lg: [
		{ i: "Item 1", x: 0, y: 0, w: 1, h: 2.5 },
		{
			i: "Item 2",
			x: 1,
			y: 0,
			w: 1,
			h: 2.5,
		},
		{ i: "Item 3", x: 2, y: 0, w: 1, h: 2 },
		{ i: "Item 4", x: 3, y: 0, w: 1, h: 1 },
		{ i: "Item 5", x: 2, y: 1, w: 1, h: 1.5 },
	],
};

export const GridLayout: Story = {
	args: {
		layouts: initialLayouts,
		children: initialLayouts.lg.map((layoutItem: Layout) => (
			<Widget
				title={layoutItem.i}
				key={layoutItem.i}
				onRemoveItem={(x: any) => alert(`removeing ${x}`)}
			>
				MY FAKE CONTENT HERE
			</Widget>
		)),
	},
};
