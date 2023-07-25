import React from "react";
import { Doughnut } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

interface DoughnutChartProps {
	data: ChartData<"doughnut">;
	options?: ChartOptions<"doughnut">;
}

const legendPosition = "right" as "right" | "center" | "top" | "bottom" | "left" | "chartArea";

const options = {
	maintainAspectRatio: false,
	responsive: true,
	plugins: {
		legend: {
			position: legendPosition,
			labels: {
				color: "#8c8c8c",
			},
		},
	},
	elements: {
		arc: {
			borderWidth: 1,
		},
	},
};

function DoughnutChart(props: DoughnutChartProps) {
	return (
		<>
			<div className="flex h-[200px]">
				<Doughnut
					data={{
						...props.data,
					}}
					// width={"100%"}
					// height={200}
					options={{ ...options, ...props.options }}
				/>
			</div>
		</>
	);
}

export default DoughnutChart;
