import Icon from "@mdi/react";
import { mdiDotsVertical, mdiMenuDown } from "@mdi/js";
import { forwardRef, ReactNode } from "react";
import OptionsDropdown from "./OptionsDropdown";

function Widget(
	props: {
		children: ReactNode;
		title: string;
		className?: string;
		key: string;
		style?: any;
		grid?: any;
		onRemoveItem?: any;
	},
	ref: any
) {
	return (
		<div
			// {...props}
			className={`bg-[--widget-background-color] border border-[--widget-border-color] widget-number ${props.className}`}
			style={props.style}
			key={props.key}
			data-grid={props.grid}
			ref={ref}
			title=""
		>
			<header className="flex items-center justify-between cursor-move mb-2 p-1 pb-0">
				<h3 className="text-[--widget-heading-color] text-lg">{props.title}</h3>

				<OptionsDropdown onRemove={() => props.onRemoveItem(props.title)}>
					<button className="flex items-center text-[--widget-dropdown_menu_button-color] -space-x-2 cursor-pointer">
						<Icon path={mdiDotsVertical} size={0.8} />
						<Icon path={mdiMenuDown} size={0.8} />
					</button>
				</OptionsDropdown>
			</header>

			<div className="min-h-[15rem] mx-h-[15rem] overflow-auto p-2 pt-0 text-[--widget-content-color]">
				<div className="cursor-pointer p-2 hover:bg-ray-100">{props.children}</div>
			</div>
		</div>
	);
}

export default forwardRef(Widget);
