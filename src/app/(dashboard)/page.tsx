"use client";

import DoughnutChart from "@/components/charts/DoughnutChart";
import LineChart from "@/components/charts/LineChart";
import Widget from "@/components/Widget/Widget";
import WidgetContainer from "@/components/Widget/WidgetContainer";
import _ from "lodash";
import { useState } from "react";
import { Layout } from "react-grid-layout";
import Toast from "@/components/toast/Toast";
import { toast } from "react-toastify";
import useSWR from "swr";
import { Api } from "@/api/Api";

const initialLayouts = {
	lg: [
		{ i: "Item 1", x: 0, y: 0, w: 2, h: 3 },
		{
			i: "Item 2",
			x: 2,
			y: 0,
			w: 2,
			h: 3,
		},
		{ i: "Item 3", x: 1, y: 1, w: 1, h: 2.5 },
		{ i: "Item 4", x: 0, y: 2, w: 1, h: 1 },
		{ i: "Item 5", x: 2, y: 1, w: 1, h: 1.5 },
	],
};

export default function Home() {
	const [layouts, setLayouts] = useState<{ lg: any }>(initialLayouts);

	const { mutate, data, isLoading, error } = useSWR("MY_KEY", () =>
		// .onNot200(() => {})
		Api.getCards().enq()
	);

	console.log("data", data?.results);
	console.log("isLoading", isLoading);
	console.log("error", error);

	const onRemoveItem = (i: any) => {
		console.log("removing", i);
		setLayouts({ lg: _.reject(layouts.lg, { i: i }) });
	};

	return (
		<>
			<Toast />

			<WidgetContainer layouts={layouts}>
				<Widget title="Line Chart" key={"Item 1"}>
					<LineChart
						data={{
							labels: [
								"Jan",
								"Feb",
								"Mar",
								"Apr",
								"May",
								"Jun",
								"Jul",
								"Aug",
								"Sep",
								"Oct",
								"Nov",
								"Dec",
							],
							datasets: [
								{
									label: "Data 1 Label",
									backgroundColor: "rgba(33,150,243,0.4)",
									borderColor: "rgba(33,150,243,1)",
									pointHoverBorderColor: "rgba(33,150,243,0.5)",
									data: [100, 80, 130, 125, 150, 200, 190, 210, 170, 190, 220, 200],
								},
							],
						}}
						xAxesSuffix="x"
						yAxesSuffix="K"
						stat={{ title: "Usage", value: 7 }}
					/>
				</Widget>

				<Widget title="Doughnut Chart" key={"Item 2"}>
					<DoughnutChart
						data={{
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
						}}
					/>
				</Widget>

				{layouts.lg.slice(2).map((layoutItem: Layout) => (
					<Widget title={layoutItem.i} key={layoutItem.i} onRemoveItem={onRemoveItem}>
						{isLoading && <p>Loading some pokemon cards for test...</p>}
						<button
							onClick={() => {
								toast.success("hello there");
							}}
							className="p-2 rounded-md bg-blue-500 text-white"
						>
							Show toast
						</button>
					</Widget>
				))}
			</WidgetContainer>
		</>
	);
}
