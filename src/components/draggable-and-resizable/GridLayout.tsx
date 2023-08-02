import { useAppSelector } from "../../hooks/useRedux";
import { ReactNode, useEffect } from "react";
import { Layout, Layouts, Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function GridLayout(props: { children: ReactNode; layouts: Layouts }) {
	const { isSidebarOpen } = useAppSelector((state) => state.uiConfig);

	const handleLayoutChange = (currentLayout: Layout[], allLayouts: Layouts): void => {
		console.log("LAYOUT CHANGED!!");

		// console.log("Cur ", currentLayout);
		// console.log("All ", allLayouts);

		// localStorage.setItem("grid-layout", JSON.stringify(layouts));
	};

	useEffect(() => {
		// when isSidebarOpen changes, we need to dispatch a resize event to the window to force the grid to re-render
		const timerId = setTimeout(() => {
			window.dispatchEvent(new Event("resize"));
		}, 300);

		return () => {
			clearTimeout(timerId);
		};
	}, [isSidebarOpen]);

	return (
		<div className="p-2 overflow-hidden">
			<ResponsiveGridLayout
				layouts={props.layouts}
				breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
				cols={{ lg: 4, md: 4, sm: 3, xs: 2, xxs: 1 }}
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
