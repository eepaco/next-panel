import { ReactNode } from "react";
import { Layout, Layouts, Responsive, WidthProvider } from "react-grid-layout";

export default function GridLayout(props: { children: ReactNode; layouts: Layouts }) {
	const ResponsiveGridLayout = WidthProvider(Responsive);

	const handleLayoutChange = (currentLayout: Layout[], allLayouts: Layouts): void => {
		console.log("LAYOUT CHANGED!!");

		// console.log("Cur ", currentLayout);
		// console.log("All ", allLayouts);

		// localStorage.setItem("grid-layout", JSON.stringify(layouts));
	};

	return (
		<div className="p-2 overflow-hidden">
			<ResponsiveGridLayout
				layouts={props.layouts}
				breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
				cols={{ lg: 4, md: 4, sm: 3, xs: 1, xxs: 1 }}
				rowHeight={100}
				width={1200}
				onLayoutChange={handleLayoutChange}
				resizeHandles={["se"]}
				isBounded={true}
				margin={{ lg: [10, 10] }}
				containerPadding={{ lg: [0, 0] }}
				draggableHandle=".grid-item__title"
				// className="bg-[red]"
				// resizeHandle={(handleAxis: ResizeHandleAxis, ref: React.Ref<HTMLDivElement>) => (
				// 	<MyHandle ref={ref} handleAxis={handleAxis} />
				// )}
			>
				{props.children}
			</ResponsiveGridLayout>
		</div>
	);
}
