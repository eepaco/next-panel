import React from "react";
import { Line } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

interface LineChartProps {
	data: ChartData<"line">;
	options?: ChartOptions<"line">;
	xAxesSuffix?: string;
	yAxesSuffix?: string;
	stat?: {
		title: string;
		value: string | number;
	};
}

function LineChart(props: LineChartProps) {
	const options = {
		maintainAspectRatio: false,
		// responsive: true,
		plugins: {
			title: {
				display: false,
			},
			legend: {
				display: false,
				// position: "bottom",
			},
		},
		scales: {
			y: {
				ticks: {
					callback: function (value: any, index: any, values: any) {
						return value + (props.yAxesSuffix ? props.yAxesSuffix : "");
					},
					color: "#8c8c8c",
				},
			},
			x: {
				ticks: {
					// callback: function (value: any, index: any, values: any) {
					// 	return value + (props.xAxesSuffix ? props.xAxesSuffix : "");
					// },
					color: "#8c8c8c",
				},
			},
		},
		elements: {
			point: {
				radius: 0,
				pointHitRadius: 15,
				pointHoverRadius: 6,
				pointHoverBorderWidth: 4,
				pointHoverBackgroundColor: "transparent",
			},
			line: {
				fill: true,
			},
		},
	};

	return (
		<div className="w-full">
			<div className="flex h-[83%]">
				<Line
					data={{
						...props.data,
					}}
					options={{ ...options, ...props.options }}
				/>
			</div>

			{props.stat && (
				<div className="flex items-center justify-center gap-2 mt-4">
					<span className="text-[--linechart-stat_title-text-color]">{props.stat.title}</span>
					<span className="font-bold text-[--linechart-stat_value-text-color] text-xl	">
						{props.stat.value}
					</span>
				</div>
			)}
		</div>
	);
}

export default LineChart;
