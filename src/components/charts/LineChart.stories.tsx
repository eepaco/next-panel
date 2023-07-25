import type { Meta, StoryObj } from "@storybook/react";
import LineChartComp from "./LineChart";

const chartDataOptions = {
	data1: {
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		datasets: [
			{
				label: "Data 1",
				backgroundColor: "rgba(33,150,243,0.4)",
				borderColor: "rgba(33,150,243,1)",
				pointHoverBorderColor: "rgba(33,150,243,0.5)",
				data: [100, 120, 130, 125, 150, 200, 190, 210, 170, 190, 220, 200],
			},
		],
	},
	data2: {
		labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
		datasets: [
			{
				label: "Data 2",
				backgroundColor: "rgba(243,32,117,0.4)",
				borderColor: "rgba(243,32,117,1)",
				pointHoverBorderColor: "rgba(243,32,117,0.5)",
				data: [85, 140, 100, 225, 190, 100, 150, 70, 90],
			},
		],
	},
	data3: {
		labels: [
			"2021",
			"2022",
			"2023",
			"2024",
			"2025",
			"2026",
			"2027",
			"2028",
			"2029",
			"2030",
			"2031",
			"2032",
			"2033",
			"2034",
			"2035",
			"2036",
			"2037",
			"2038",
			"2039",
			"2040",
			"2041",
			"2042",
			"2043",
			"2044",
			"2045",
			"2046",
			"2047",
			"2048",
			"2049",
			"2050",
		],
		datasets: [
			{
				label: "In",
				backgroundColor: "rgba(32,243,162,0.4)",
				borderColor: "rgba(32,243,162,1)",
				pointHoverBorderColor: "rgba(32,243,162,0.5)",
				data: [
					105, 130, 90, 125, 90, 100, 120, 130, 125, 150, 200, 190, 210, 170, 190, 220, 200, 210,
					100, 110, 140, 70, 120, 105, 200, 190, 100, 150, 90, 100,
				],
			},
			{
				label: "Out",
				backgroundColor: "rgba(243,226,32,0.4)",
				borderColor: "rgba(243,226,32,1)",
				pointHoverBorderColor: "rgba(243,226,32,0.5)",
				data: [
					70, 120, 105, 200, 190, 100, 150, 90, 100, 105, 130, 90, 125, 90, 210, 100, 110, 140, 100,
					120, 130, 125, 150, 200, 190, 210, 170, 190, 220, 200,
				],
			},
		],
	},
};

const meta: Meta<typeof LineChartComp> = {
	title: "Charts/Line Chart",
	component: LineChartComp,
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

type Story = StoryObj<typeof LineChartComp>;

export const LineChart: Story = {
	args: { data: chartDataOptions.data1 },
};

export const LineChartWithStat: Story = {
	args: {
		data: chartDataOptions.data1,
		stat: { title: "Usage", value: 7 },
	},
};
