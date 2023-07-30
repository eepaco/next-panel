import { forwardRef, useEffect } from "react";
import Widget from "./Widget";

const WidgetContainer = forwardRef(function WidgetComponent(
	{ title, children, ...props }: any,
	ref: any
) {
	useEffect(() => {
		console.log("wwww", parseInt(props.style.height));

		const chartNode = ref.current;
		const height = chartNode.offsetHeight;

		console.log("height", height);

		console.log(ref.current);
	}, []);
	return (
		<Widget title={title} {...props} ref={ref}>
			{children}
		</Widget>
	);
});

export default WidgetContainer;
