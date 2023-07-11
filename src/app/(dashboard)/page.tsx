"use client";

import DragableAndResizable from "@/components/DragableAndResizable/DragableAndResizable";
import DragableAndResizableContainer from "@/components/DragableAndResizable/DragableAndResizableContainer";

const layout = {
	lg: [
		{ i: "Item 1", x: 0, y: 0, w: 1, h: 2.5 },
		{
			i: "Item 2",
			x: 1,
			y: 0,
			w: 1,
			h: 2.5,
			// resizeHandles: ["s", "w", "e", "n", "sw", "nw", "se", "ne"],
		},
		{ i: "Item 3", x: 2, y: 0, w: 1, h: 2 },
		{ i: "Item 4", x: 3, y: 0, w: 1, h: 1 },
		{ i: "Item 5", x: 2, y: 1, w: 1, h: 1.5 },
	],
};

export default function Home() {
	return (
		<>
			<DragableAndResizableContainer layouts={layout}>
				{layout.lg.map((item) => (
					<DragableAndResizable title={item.i} key={item.i}>
						Blue Eyes Dragon
					</DragableAndResizable>
				))}

				<DragableAndResizable title="Overview">
					<div className="flex items-center text-sm my-4">
						<span className="text-gray-400 min-w-[4rem]">Title</span>
						<span className="text-gray-600">Some Information</span>
					</div>
					<div className="flex items-center text-sm my-4">
						<span className="text-gray-400 min-w-[4rem]">Title</span>
						<span className="text-gray-600">Some Information</span>
					</div>
					<div className="flex items-center text-sm my-4">
						<span className="text-gray-400 min-w-[4rem]">Title</span>
						<span className="text-gray-600">Some Information</span>
					</div>
					<div className="flex items-center text-sm my-4">
						<span className="text-gray-400 min-w-[4rem]">Title</span>
						<span className="text-gray-600">Some Information</span>
					</div>
					<div className="flex items-center text-sm my-4">
						<span className="text-gray-400 min-w-[4rem]">Title</span>
						<span className="text-gray-600">Some Information</span>
					</div>
					<div className="flex items-center text-sm my-4">
						<span className="text-gray-400 min-w-[4rem]">Title</span>
						<span className="text-gray-600">Some Information</span>
					</div>
					<div className="flex items-center text-sm my-4">
						<span className="text-gray-400 min-w-[4rem]">Title</span>
						<span className="text-gray-600">Some Information</span>
					</div>
				</DragableAndResizable>
			</DragableAndResizableContainer>

			{/* <div className="p-2">
				<ResponsiveGridLayout
					layouts={layout}
					breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
					cols={{ lg: 4, md: 3, sm: 2, xs: 1, xxs: 1 }}
					rowHeight={100}
					// width={1000}
					onLayoutChange={handleLayoutChange}
					resizeHandles={["se"]}
					isBounded={true}
					margin={{ lg: [10, 10] }}
					containerPadding={{ lg: [0, 0] }}
					// resizeHandle={(handleAxis: ResizeHandleAxis, ref: React.Ref<HTMLDivElement>) => (
					// 	<MyHandle ref={ref} handleAxis={handleAxis} />
					// )}
				>
					{layout.lg.map((item) => (
						<DragableAndResizable title={item.i} key={item.i}>
							Blue Eyes Dragon
						</DragableAndResizable>
					))}
				</ResponsiveGridLayout>
			</div> */}
		</>
	);
}
