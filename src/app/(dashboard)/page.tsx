"use client";

import DragableAndResizable from "@/components/DragableAndResizable/DragableAndResizable";
import DragableAndResizableContainer from "@/components/DragableAndResizable/DragableAndResizableContainer";
import _ from "lodash";
import { useState } from "react";
import { Layout } from "react-grid-layout";

const initialLayout = {
	lg: [
		{ i: "Item 1", x: 0, y: 0, w: 1, h: 2.5 },
		{
			i: "Item 2",
			x: 1,
			y: 0,
			w: 1,
			h: 2.5,
		},
		{ i: "Item 3", x: 2, y: 0, w: 1, h: 2 },
		{ i: "Item 4", x: 3, y: 0, w: 1, h: 1 },
		{ i: "Item 5", x: 2, y: 1, w: 1, h: 1.5 },
	],
};

export default function Home() {
	const [layouts, setLayouts] = useState<{ lg: any }>(initialLayout);

	const onRemoveItem = (i: any) => {
		console.log("removing", i);
		setLayouts({ lg: _.reject(layouts.lg, { i: i }) });
	};

	return (
		<>
			<DragableAndResizableContainer layouts={layouts}>
				{layouts.lg.map((layoutItem: Layout) => (
					<DragableAndResizable title={layoutItem.i} key={layoutItem.i} onRemoveItem={onRemoveItem}>
						MY FAKE CONTENT HERE
					</DragableAndResizable>
				))}
			</DragableAndResizableContainer>
		</>
	);
}
