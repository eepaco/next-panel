import type { Meta, StoryObj } from "@storybook/react";
import GridLayout from "../draggable-and-resizable/GridLayout";
import { Layout } from "react-grid-layout";
import WidgetContainer from "./WidgetContainer";

const LayoutData = {
	layout1: {
		lg: [
			{ i: "Item 1", x: 0, y: 0, w: 2, h: 3, minH: 3, maxH: 6 },
			{
				i: "Item 2",
				x: 2,
				y: 0,
				w: 2,
				h: 3,
				minH: 3,
				maxH: 6,
			},
			{ i: "Item 3", x: 1, y: 1, w: 1, h: 2.5, maxH: 6 },
			{ i: "Item 4", x: 0, y: 2, w: 1, h: 1, maxH: 6 },
			{ i: "Item 5", x: 2, y: 1, w: 1, h: 1.5, maxH: 6 },
		],
		md: [
			{ i: "Item 1", x: 0, y: 0, w: 2, h: 3, minH: 3, maxH: 6 },
			{
				i: "Item 2",
				x: 2,
				y: 0,
				w: 2,
				h: 3,
				minH: 3,
				maxH: 6,
			},
			{ i: "Item 3", x: 1, y: 1, w: 1, h: 2.5, maxH: 6 },
			{ i: "Item 4", x: 0, y: 2, w: 1, h: 1, maxH: 6 },
			{ i: "Item 5", x: 0, y: 1, w: 1, h: 1.5, maxH: 6 },
		],
	},
	layout2: {
		lg: [
			{ i: "a", x: 0, y: 0, w: 1, h: 2 },
			{ i: "b", x: 1, y: 0, w: 1, h: 2 },
			{ i: "c", x: 2, y: 0, w: 1, h: 2 },
			{ i: "d", x: 3, y: 0, w: 1, h: 2 },
			{ i: "e", x: 0, y: 2, w: 1, h: 2 },
			{ i: "f", x: 1, y: 2, w: 1, h: 2 },
			{ i: "g", x: 2, y: 2, w: 1, h: 2 },
			{ i: "h", x: 0, y: 4, w: 2, h: 2 },
			{ i: "i", x: 2, y: 4, w: 2, h: 2 },
		],
		md: [
			{ i: "a", x: 0, y: 0, w: 1, h: 2 },
			{ i: "b", x: 1, y: 0, w: 1, h: 2 },
			{ i: "c", x: 2, y: 0, w: 1, h: 2 },
			{ i: "d", x: 3, y: 0, w: 1, h: 2 },
			{ i: "e", x: 0, y: 2, w: 1, h: 2 },
			{ i: "f", x: 1, y: 2, w: 1, h: 2 },
			{ i: "g", x: 2, y: 2, w: 1, h: 2 },
			{ i: "h", x: 0, y: 4, w: 2, h: 2 },
			{ i: "i", x: 2, y: 4, w: 2, h: 2 },
		],
		sm: [
			{ i: "a", x: 0, y: 0, w: 1, h: 2 },
			{ i: "b", x: 1, y: 0, w: 1, h: 2 },
			{ i: "c", x: 2, y: 0, w: 1, h: 2 },
			{ i: "d", x: 0, y: 2, w: 1, h: 2 },
			{ i: "e", x: 1, y: 2, w: 1, h: 2 },
			{ i: "f", x: 2, y: 2, w: 1, h: 2 },
			{ i: "g", x: 0, y: 4, w: 1, h: 2 },
			{ i: "h", x: 1, y: 4, w: 2, h: 2 },
			{ i: "i", x: 0, y: 6, w: 3, h: 2 },
		],
		xs: [
			{ i: "a", x: 0, y: 0, w: 1, h: 2 },
			{ i: "b", x: 1, y: 0, w: 1, h: 2 },
			{ i: "c", x: 0, y: 2, w: 1, h: 2 },
			{ i: "d", x: 1, y: 2, w: 1, h: 2 },
			{ i: "e", x: 0, y: 4, w: 1, h: 2 },
			{ i: "f", x: 1, y: 4, w: 1, h: 2 },
			{ i: "g", x: 0, y: 6, w: 2, h: 2 },
			{ i: "h", x: 0, y: 8, w: 2, h: 2 },
			{ i: "i", x: 0, y: 10, w: 2, h: 2 },
		],
	},
};

const meta: Meta<typeof GridLayout> = {
	title: "Widget",
	component: GridLayout,
	argTypes: {
		children: {
			table: {
				disable: true,
			},
		},
		layouts: {
			options: Object.keys(LayoutData),
			mapping: LayoutData,
			control: {
				type: "select",
				labels: {
					layout1: "Layout 1",
					layout2: "Layout 2",
				},
			},
		},
	},
	args: {
		children: LayoutData.layout2.lg.map((layoutItem: Layout) => (
			<WidgetContainer
				title={layoutItem.i}
				key={layoutItem.i}
				onRemoveItem={(x: any) => alert(`removeing ${x}`)}
			>
				MY FAKE CONTENT HERE
			</WidgetContainer>
		)),
	},
};
export default meta;

type Story = StoryObj<typeof GridLayout>;

export const WidgetLayout: Story = {
	args: {
		layouts: LayoutData.layout1,
	},
};
