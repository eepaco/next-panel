"use client";

import DoughnutChart from "@/components/charts/DoughnutChart";
import LineChart from "@/components/charts/LineChart";
import WidgetContainer from "@/components/widget/WidgetContainer";
import GridLayout from "@/components/draggable-and-resizable/GridLayout";
import _ from "lodash";
import { useState } from "react";
import { Layout } from "react-grid-layout";
import Toast from "@/components/toast/Toast";
import useSWR from "swr";
import { Api } from "@/api/Api";
import { mdiInformation } from "@mdi/js";
import Icon from "@mdi/react";

const initialLayouts = {
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
};

export default function Home() {
	const [layouts, setLayouts] = useState<{ lg: any }>(initialLayouts);

	const { data, isLoading } = useSWR("MY_KEY", () =>
		// .onNot200(() => {})
		Api.getCards().enq()
	);

	console.log("data", data?.results);
	console.log("isLoading", isLoading);

	const onRemoveItem = (i: any) => {
		console.log("removing", i);
		setLayouts({ lg: _.reject(layouts.lg, { i: i }) });
	};

	return (
		<>
			<Toast />

			<GridLayout layouts={layouts}>
				<WidgetContainer title="Line Chart" color="warning" key={"Item 1"}>
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
				</WidgetContainer>

				<WidgetContainer
					title="Doughnut Chart"
					key={"Item 2"}
					footer={<div className="bg-blue-400 p-2 text-white">This is footer</div>}
					headerStart={
						<Icon
							path={mdiInformation}
							size={0.7}
							title="This is for Header Start"
							className="text-blue-500 cursor-pointer"
						/>
					}
					headerEnd={
						<button
							className="text-xs bg-red-500 text-white px-2 py-[0.1rem] rounded-md"
							onClick={() => alert("YOU clicked on HeaderEnd button")}
						>
							Click me
						</button>
					}
				>
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
				</WidgetContainer>

				{layouts.lg.slice(2).map((layoutItem: Layout, i: number) => (
					<WidgetContainer
						title={layoutItem.i}
						key={layoutItem.i}
						onRemoveItem={onRemoveItem}
						color={i % 3 === 0 ? "info" : i % 3 === 1 ? "success" : "danger"}
					>
						{isLoading && <p>Loading some pokemon cards for test...</p>}
						<p>hello there</p>
					</WidgetContainer>
				))}
			</GridLayout>
		</>
	);
}
