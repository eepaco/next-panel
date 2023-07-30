import { forwardRef } from "react";
import Widget from "./Widget";

const WidgetContainer = forwardRef(function WidgetComponent(
	{ title, children, ...props }: any,
	ref: any
) {
	return (
		<Widget title={title} {...props} ref={ref}>
			{children}
		</Widget>
	);
});

export default WidgetContainer;
