import { ReactNode } from "react";
import { Layout, Layouts, Responsive, WidthProvider } from "react-grid-layout";

export default function DragableAndResizableContainer(props: {
	children: ReactNode;
	layouts: Layouts;
}) {
	const ResponsiveGridLayout = WidthProvider(Responsive);

	const handleLayoutChange = (currentLayout: Layout[], allLayouts: Layouts): void => {
		console.log("LAYOUT CHANGED!!");

		console.log(currentLayout);
		console.log(allLayouts);

		// localStorage.setItem("grid-layout", JSON.stringify(layouts));
	};

	return (
		<div className="p-2 overflow-hidden">
			<ResponsiveGridLayout
				layouts={props.layouts}
				breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
				cols={{ lg: 4, md: 3, sm: 2, xs: 1, xxs: 1 }}
				rowHeight={100}
				width={1200}
				onLayoutChange={handleLayoutChange}
				resizeHandles={["se"]}
				isBounded={true}
				margin={{ lg: [10, 10] }}
				containerPadding={{ lg: [0, 0] }}
				// resizeHandle={(handleAxis: ResizeHandleAxis, ref: React.Ref<HTMLDivElement>) => (
				// 	<MyHandle ref={ref} handleAxis={handleAxis} />
				// )}
			>
				{props.children}
			</ResponsiveGridLayout>
		</div>
	);
}
