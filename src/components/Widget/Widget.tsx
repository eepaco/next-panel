import Icon from "@mdi/react";
import { mdiDotsVertical, mdiMenuDown } from "@mdi/js";
import { CSSProperties, forwardRef, ReactNode } from "react";
import OptionsDropdown from "./OptionsDropdown";

type WidgetProps = {
	children: ReactNode;
	title: string;
	className?: string;
	style?: CSSProperties;
	onRemoveItem?: any;
	color?: "info" | "success" | "danger" | "warning";
};

const Widget = forwardRef(function WidgetGridItemComponent(
	{ children, title, className, style, onRemoveItem, color, ...rest }: WidgetProps,
	ref: any
) {
	return (
		<div
			className={`bg-[--widget-background-color] outline outline-1 outline-[--widget-border-color] hover:outline-dashed hover:outline-2
				widget-number flex flex-col 
				${
					color === "warning" &&
					"bg-[--widget-warning-background-color] outline-[--widget-warning-border-color]"
				}
				${
					color === "danger" &&
					"bg-[--widget-danger-background-color] outline-[--widget-danger-border-color]"
				}
				${
					color === "success" &&
					"bg-[--widget-success-background-color] outline-[--widget-success-border-color]"
				}
				${color === "info" && "bg-[--widget-info-background-color] outline-[--widget-info-border-color]"}
				${className}
			`}
			style={style}
			ref={ref}
			{...rest}
		>
			<header
				className={`bg-[--widget-heading-background-color] flex items-center justify-between 
					cursor-move mb-2 p-1 pb-0 grid-item__title
					${color === "warning" && "bg-[--widget-heading-warning-background-color]"}
					${color === "danger" && "bg-[--widget-heading-danger-background-color]"}
					${color === "success" && "bg-[--widget-heading-success-background-color]"}
					${color === "info" && "bg-[--widget-heading-info-background-color]"}
				`}
			>
				<h3
					className={`
						text-[--widget-heading-color] text-lg
						${color === "warning" && "text-[--widget-heading-warning-color]"}
						${color === "danger" && "text-[--widget-heading-danger-color]"}
						${color === "success" && "text-[--widget-heading-success-color]"}
						${color === "info" && "text-[--widget-heading-info-color]"}
					`}
				>
					{title}
				</h3>

				<OptionsDropdown onRemove={() => onRemoveItem(title)}>
					<button
						className={`
							flex items-center text-[--widget-dropdown_menu_button-color] -space-x-2 cursor-pointer
							${color === "warning" && "text-[--widget-dropdown_menu_button-warning-color]"}
							${color === "danger" && "text-[--widget-dropdown_menu_button-danger-color]"}
							${color === "success" && "text-[--widget-dropdown_menu_button-success-color]"}
							${color === "info" && "text-[--widget-dropdown_menu_button-info-color]"}
						`}
					>
						<Icon path={mdiDotsVertical} size={0.8} />
						<Icon path={mdiMenuDown} size={0.8} />
					</button>
				</OptionsDropdown>
			</header>

			<div className="text-[--widget-content-color] flex flex-1 h-full">{children}</div>
		</div>
	);
});

export default Widget;
