import type { Meta, StoryObj } from "@storybook/react";
import Toast from "./Toast";
import { toast } from "react-toastify";

const meta: Meta<typeof Toast> = {
	title: "Toast",
	component: Toast,
	parameters: {
		layout: "centered",
	},
	argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Toast>;

export const SuccessToast: Story = {
	decorators: [
		(story) => (
			<div>
				<button
					className="bg-green-600 rounded-md p-2 text-white"
					onClick={() => toast.success("SUCCESS")}
				>
					Show Toast
				</button>
				{story()}
			</div>
		),
	],
};

export const ErrorToast: Story = {
	decorators: [
		(story) => (
			<div>
				<button
					className="bg-red-600 rounded-md p-2 text-white"
					onClick={() => toast.error("ERROR")}
				>
					Show Toast
				</button>
				{story()}
			</div>
		),
	],
};

export const InfoToast: Story = {
	decorators: [
		(story) => (
			<div>
				<button
					className="bg-blue-600 rounded-md p-2 text-white"
					onClick={() => toast.info("INFO")}
				>
					Show Toast
				</button>
				{story()}
			</div>
		),
	],
};

export const WarningToast: Story = {
	decorators: [
		(story) => (
			<div>
				<button
					className="bg-orange-600 rounded-md p-2 text-white"
					onClick={() => toast.warning("WARNING")}
				>
					Show Toast
				</button>
				{story()}
			</div>
		),
	],
};
