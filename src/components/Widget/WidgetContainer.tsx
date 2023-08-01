import { forwardRef } from "react";
import Widget from "./Widget";
import { WidgetProps } from "./Widget";

const WidgetContainer = forwardRef(function WidgetComponent(
	{ children, ...props }: WidgetProps,
	ref: any
) {
	return (
		<Widget {...props} ref={ref}>
			{children}
		</Widget>
	);
});

export default WidgetContainer;
