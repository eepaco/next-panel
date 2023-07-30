import Icon from "@mdi/react";
import { mdiDotsVertical, mdiMenuDown } from "@mdi/js";
import { CSSProperties, forwardRef, ReactNode, Ref, RefObject, useEffect } from "react";
import OptionsDropdown from "./OptionsDropdown";

type WidgetProps = {
	children: ReactNode;
	title: string;
	className?: string;
	style?: CSSProperties;
	onRemoveItem?: any;
};

const Widget = forwardRef(function WidgetGridItemComponent(
	{ children, title, className, style, onRemoveItem, ...rest }: WidgetProps,
	ref: any
) {
	// useEffect(() => {
	// 	const chartNode = ref.current;
	// 	const width = chartNode.offsetWidth;
	// 	const height = chartNode.offsetHeight;

	// 	console.log("width", width);
	// 	console.log("height", height);

	// 	console.log(ref.current);
	// }, []);

	return (
		<div
			className={`bg-[--widget-background-color] outline outline-1 outline-[--widget-border-color] hover:outline-dashed hover:outline-2
				widget-number flex flex-col ${className}
			`}
			style={style}
			ref={ref}
			{...rest}
		>
			<header className="flex items-center justify-between cursor-move mb-2 p-1 pb-0 grid-item__title">
				<h3 className="text-[--widget-heading-color] text-lg">{title}</h3>

				<OptionsDropdown onRemove={() => onRemoveItem(title)}>
					<button className="flex items-center text-[--widget-dropdown_menu_button-color] -space-x-2 cursor-pointer">
						<Icon path={mdiDotsVertical} size={0.8} />
						<Icon path={mdiMenuDown} size={0.8} />
					</button>
				</OptionsDropdown>
			</header>

			<div className="text-[--widget-content-color] flex flex-col flex-1 h-full">{children}</div>
		</div>
	);
});

export default Widget;
