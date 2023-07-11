import Icon from "@mdi/react";
import { mdiDotsVertical, mdiMenuDown } from "@mdi/js";
import { forwardRef, ReactNode } from "react";
import OptionsDropdown from "./OptionsDropdown";

function DragableAndResizable(
	props: {
		children: ReactNode;
		title: string;
		className?: string;
		key?: string;
		style?: any;
		grid?: any;
	},
	ref: any
) {
	// const moduleRef = useRef<HTMLDivElement>(null);

	return (
		<div
			{...props}
			className={`p-2 bg-white border border-gray-300 widget-number ${props.className || ""}`}
			// ref={moduleRef}
			key={props.key}
			// style={props.style}
			data-grid={props.grid}
			ref={ref}
			title=""
		>
			<header className="flex items-center justify-between cursor-move mb-2">
				<h3 className="text-[#919191] text-lg">{props.title}</h3>

				<OptionsDropdown
				// moduleRef={moduleRef}
				>
					<button className="flex items-center text-[#2d2d2d] -space-x-2 cursor-pointer">
						<Icon path={mdiDotsVertical} size={0.8} />
						<Icon path={mdiMenuDown} size={0.8} />
					</button>
				</OptionsDropdown>
			</header>

			<div className="min-h-[15rem] max-h-[15rem] overflow-auto">
				<div className="cursor-pointer p-2 hover:bg-gray-100">{props.children}</div>
			</div>
		</div>
	);
}

export default forwardRef(DragableAndResizable);
