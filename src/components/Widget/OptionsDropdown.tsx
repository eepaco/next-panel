import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import Icon from "@mdi/react";
import { mdiChevronRight, mdiCloseThick, mdiCog, mdiCursorMove } from "@mdi/js";
import React, { ReactNode, useState } from "react";

const OptionsDropdown = (props: { children: ReactNode; onRemove: any }) => {
	const [count, setCount] = useState(1);
	const [tempCount, setTempCount] = useState(1);

	// const handleResizeClick = (number: 1 | 2 | 3 | 4): void => {
	// 	widget?.classList.remove(`col-span-${count}`);
	// 	widget?.classList.add(`col-span-${number}`);
	// 	setCount(number);
	// };

	return (
		<div className="relative inline-block text-left z-1">
			<DropdownMenuPrimitive.Root>
				<DropdownMenuPrimitive.Trigger asChild>{props.children}</DropdownMenuPrimitive.Trigger>

				<DropdownMenuPrimitive.Portal>
					<DropdownMenuPrimitive.Content
						align="end"
						sideOffset={5}
						className={`
              will-change-[opacity,transform] data-[side=top]:animate-[--slideDownAndFade] data-[side=right]:animate-[--slideLeftAndFade]
              data-[side=bottom]:animate-[--slideUpAndFade] data-[side=left]:animate-[--slideRightAndFade]
              rounded-lg px-1.5 py-1 shadow-md w-36
              bg-[--widget-dropdown_menu-background-color] border
            `}
					>
						<DropdownMenuPrimitive.Sub>
							<DropdownMenuPrimitive.SubTrigger
								className={`
                  flex w-full cursor-pointer select-none items-center rounded-md px-1 py-1 outline-none
                  text-[--widget-dropdown_menu-text-color]
                  data-[state=open]:bg-[--widget-dropdown_menu-background-active-color]
                  data-[state=open]:text-[--widget-dropdown_menu-text-active-color]
									 data-[disabled]:text-gray-300 
                  data-[disabled]:pointer-events-none
									data-[highlighted]:data-[state=open]:bg-[--widget-dropdown_menu-background-hover-color]
									data-[highlighted]:data-[state=open]:text-[--widget-dropdown_menu-text-hover-color]
                  `}
								// *data-[highlighted]:data-[state=open]:text-blue-800
							>
								<Icon path={mdiCursorMove} size={0.7} className="me-2" />
								<span className="flex-grow">Resize</span>
								<Icon path={mdiChevronRight} size={0.7} />
							</DropdownMenuPrimitive.SubTrigger>
							<DropdownMenuPrimitive.Portal>
								<DropdownMenuPrimitive.SubContent
									className={`
                    origin-radix-dropdown-menu radix-side-right:animate-[--scaleIn]
                    w-full rounded-md px-1 py-1 text-xs shadow-md
                    bg-[--widget-dropdown_menu-background-color] border
                    data-[side=top]:animate-[--slideDownAndFade] data-[side=right]:animate-[--slideLeftAndFade]
                    data-[side=bottom]:animate-[--slideUpAndFade] data-[side=left]:animate-[--slideRightAndFade]
                  `}
								>
									<DropdownMenuPrimitive.Item
										className={`
                        flex flex-col min-w-14 select-none items-end rounded-md text-xs 
                        outline-none text-[#2d2d2d]
                      `}
									>
										<div className="flex">
											<div
												className={`h-4 w-4 border border-gray-700 cursor-pointer ${
													count >= 1 && "bg-gray-400"
												} ${tempCount >= 1 && "bg-green-700"} hover:bg-green-700`}
												onMouseOver={() => setTempCount(1)}
												// onClick={() => handleResizeClick(1)}
											></div>
											<div
												className={`h-4 w-4 border border-gray-700 cursor-pointer ${
													count >= 2 && "bg-gray-400"
												} ${tempCount >= 2 && "bg-green-700"} hover:bg-green-700 hidden sm:block`}
												onMouseOver={() => setTempCount(2)}
												// onClick={() => handleResizeClick(2)}
											></div>
											<div
												className={`h-4 w-4 border border-gray-700 cursor-pointer ${
													count >= 3 && "bg-gray-400"
												} ${tempCount >= 3 && "bg-green-700"} hover:bg-green-700 hidden md:block`}
												onMouseOver={() => setTempCount(3)}
												// onClick={() => handleResizeClick(3)}
											></div>
											<div
												className={`h-4 w-4 border border-gray-700 cursor-pointer ${
													count >= 4 && "bg-gray-400"
												} ${tempCount >= 4 && "bg-green-700"} hover:bg-green-700 hidden lg:block`}
												onMouseOver={() => setTempCount(4)}
												// onClick={() => handleResizeClick(4)}
											></div>
										</div>
										<div className="mt-1">{count} x 1</div>
									</DropdownMenuPrimitive.Item>
								</DropdownMenuPrimitive.SubContent>
							</DropdownMenuPrimitive.Portal>
						</DropdownMenuPrimitive.Sub>

						<DropdownMenuPrimitive.Item
							className={`
                  flex cursor-pointer select-none items-center rounded-md px-1 py-1 outline-none
                  text-[--widget-dropdown_menu-text-color]
                  data-[highlighted]:bg-[--widget-dropdown_menu-background-hover-color]
									data-[highlighted]:text-[--widget-dropdown_menu-text-hover-color]
                `}
						>
							<Icon path={mdiCog} size={0.7} className="me-2" />
							<span className="flex-grow">Settings</span>
						</DropdownMenuPrimitive.Item>

						<DropdownMenuPrimitive.Separator className="my-1 h-px bg-gray-200" />

						<DropdownMenuPrimitive.Item
							className={`
                  flex cursor-pointer select-none items-center rounded-md px-1 py-1 outline-none
                  text-[--widget-dropdown_menu-text-color]
                  data-[highlighted]:bg-[--widget-dropdown_menu-background-hover-color]
									data-[highlighted]:text-[--widget-dropdown_menu-text-hover-color]
                `}
							onClick={props.onRemove}
						>
							<Icon path={mdiCloseThick} size={0.7} className="me-2" />
							<span className="flex-grow">Remove</span>
						</DropdownMenuPrimitive.Item>
					</DropdownMenuPrimitive.Content>
				</DropdownMenuPrimitive.Portal>
			</DropdownMenuPrimitive.Root>
		</div>
	);
};

export default OptionsDropdown;
