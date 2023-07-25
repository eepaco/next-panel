import type { Meta, StoryObj } from "@storybook/react";
import DoughnutChartComp from "./DoughnutChart";

const chartDataOptions = {
	data1: {
		labels: ["Label 1", "Label 2", "Label 3", "Label 4"],
		datasets: [
			{
				data: [12, 19, 3, 5],
				backgroundColor: [
					"rgba(75, 192, 192, 0.6)",
					"rgba(255, 206, 86, 0.6)",
					"rgba(54, 162, 235, 0.6)",
					"rgba(255, 99, 132, 0.6)",
				],
				borderColor: [
					"rgba(75, 192, 192, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 99, 132, 1)",
				],
			},
		],
	},
	data2: {
		labels: ["Label 1", "Label 2"],
		datasets: [
			{
				data: [3333, 2222],
				backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(255, 206, 86, 0.6)"],
				borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 206, 86, 1)"],
			},
		],
	},
	data3: {
		labels: [
			"Label 1",
			"Label 2",
			"Label 3",
			"Label 4",
			"Label 5",
			"Label 6",
			"Label 7",
			"Label 8",
		],
		datasets: [
			{
				data: [3333, 4444, 8888, 1111, 5555, 7777, 6666, 2222],
				backgroundColor: [
					"rgba(75, 192, 192, 0.6)",
					"rgba(255, 206, 86, 0.6)",
					"rgba(74, 97, 191, 0.6)",
					"rgba(160, 74, 191, 0.6)",
					"rgba(191, 74, 97, 0.6)",
					"rgba(74, 191, 119, 0.6)",
					"rgba(191, 187, 74, 0.6)",
					"rgba(217, 8, 8, 0.6)",
				],
				borderColor: [
					"rgba(75, 192, 192, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(74, 97, 191, 1)",
					"rgba(160, 74, 191, 1)",
					"rgba(191, 74, 97, 1)",
					"rgba(74, 191, 119, 1)",
					"rgba(191, 187, 74, 1)",
					"rgba(217, 8, 8, 1)",
				],
			},
		],
	},
};

const meta: Meta<typeof DoughnutChartComp> = {
	title: "Charts/Doughnut Chart",
	component: DoughnutChartComp,
	argTypes: {
		data: {
			options: Object.keys(chartDataOptions),
			mapping: chartDataOptions,
			control: {
				type: "select",
				labels: {
					data1: "Data 1",
					data2: "Data 2",
					data3: "Data 3",
				},
			},
		},
	},
};
export default meta;

type Story = StoryObj<typeof DoughnutChartComp>;

export const DoughnutChart: Story = {
	args: { data: chartDataOptions.data1 },
};
