import type { Meta, StoryObj } from "@storybook/react";
import WidgetComp from "./Widget";
import { mdiInformation } from "@mdi/js";
import Icon from "@mdi/react";

const meta: Meta<typeof WidgetComp> = {
	title: "Widget",
	component: WidgetComp,
	decorators: [(story) => <div className="w-[20rem]">{story()}</div>],
	argTypes: {
		children: {
			table: {
				disable: true,
			},
		},
		onRemoveItem: {
			table: {
				disable: true,
			},
		},
		footer: {
			table: {
				disable: true,
			},
		},
		headerStart: {
			table: {
				disable: true,
			},
		},
		headerEnd: {
			table: {
				disable: true,
			},
		},
	},
};
export default meta;

type Story = StoryObj<typeof WidgetComp>;

export const DefaultWidget: Story = {
	args: {
		title: "Widget title",
		children: <div>my fake content is here</div>,
	},
	argTypes: {
		color: {
			table: {
				disable: true,
			},
		},
	},
};

export const SemanticWidget: Story = {
	args: {
		title: "Widget title",
		children: <div>my fake content is here</div>,
		color: "info",
	},
};

export const WidgetWithExtraHeaderAndFooter: Story = {
	args: {
		title: "Widget title",
		children: (
			<div className="p-1">
				<p>my fake content is here</p>
				<p>my fake content is here</p>
				<p>my fake content is here</p>
				<p>my fake content is here</p>
				<p>my fake content is here</p>
				<p>my fake content is here</p>
				<p>my fake content is here</p>
			</div>
		),
		headerStart: (
			<Icon
				path={mdiInformation}
				size={0.7}
				title="This is for Header Start"
				className="text-green-500 cursor-pointer"
			/>
		),
		headerEnd: (
			<button
				className="text-xs bg-red-500 text-white px-2 py-[0.1rem] rounded-md"
				onClick={() => alert("YOU clicked on HeaderEnd button")}
			>
				Click me
			</button>
		),
		footer: <div className="bg-blue-400 p-2 text-white">This is footer</div>,
	},
};
