"use client";

import LineChart from "@/components/charts/LineChart";
import Widget from "@/components/Widget/Widget";
import WidgetContainer from "@/components/Widget/WidgetContainer";
import _ from "lodash";
import { useState } from "react";
import { Layout } from "react-grid-layout";

const initialLayouts = {
	lg: [
		{ i: "Item 1", x: 0, y: 0, w: 2, h: 3 },
		{
			i: "Item 2",
			x: 1,
			y: 1,
			w: 1,
			h: 2.5,
		},
		{ i: "Item 3", x: 2, y: 0, w: 1, h: 2 },
		{ i: "Item 4", x: 3, y: 0, w: 1, h: 1 },
		{ i: "Item 5", x: 2, y: 1, w: 1, h: 1.5 },
	],
};

export default function Home() {
	const [layouts, setLayouts] = useState<{ lg: any }>(initialLayouts);

	const onRemoveItem = (i: any) => {
		console.log("removing", i);
		setLayouts({ lg: _.reject(layouts.lg, { i: i }) });
	};

	return (
		<>
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

				{layouts.lg.slice(2).map((layoutItem: Layout) => (
					<Widget title={layoutItem.i} key={layoutItem.i} onRemoveItem={onRemoveItem}>
						My fake content here
					</Widget>
				))}
			</WidgetContainer>
		</>
	);
}
