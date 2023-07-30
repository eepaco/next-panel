import type { Meta, StoryObj } from "@storybook/react";
import Icon from "@mdi/react";
import { mdiTranslate } from "@mdi/js";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import NavbarDropdownTriggerButton from "./NavbarDropdownTriggerButton";
import NavbarDropdownContent from "./NavbarDropdownContent";
import NavbarDropdownItem from "./NavbarDropdownItem";

const meta: Meta<typeof NavigationMenu.Item> = {
	title: "Navbar",
	component: NavigationMenu.Item,
	decorators: [
		(story: any) => (
			<NavigationMenu.Root className={`w-full fixed end-0 top-[0] z-[1] ease-in`}>
				<NavigationMenu.List
					className={`bg-[--navbar-background-color] text-[--navbar-item-text-color]
          flex flex-row items-stretch justify-between h-[2.6rem] left-[100%]
          `}
				>
					<div className="flex">{story()}</div>

					<NavigationMenu.Indicator className="data-[state=visible]:animate-[--fadeIn] data-[state=hidden]:animate-[--fadeOut] top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
						<div
							className="relative top-[70%] 
              h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] 
              bg-[--navbar-dropdown_menu-border-color]
							bgd-[redddd]
            "
						/>
					</NavigationMenu.Indicator>
				</NavigationMenu.List>

				<div className="absolute top-full start-0 flex w-full justify-start">
					<NavigationMenu.Viewport
						className="bg-[--navbar-dropdown_menu-background-color] border border-[--navbar-dropdown_menu-border-color]
						data-[state=open]:animate-[--scaleIn] 
            data-[state=closed]:animate-[--scaleOut] relative mt-[10px] 
            h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] 
            overflow-hidden rounded-[4px] transition-[width,_height]
            duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)] end-2 start-2
          "
					/>
				</div>
			</NavigationMenu.Root>
		),
	],
};
export default meta;

type Story = StoryObj<typeof NavigationMenu.Item>;

export const NavigationDropdown: Story = {
	args: {
		children: (
			<NavigationMenu.Item className="flex h-full">
				<NavbarDropdownTriggerButton>
					<Icon path={mdiTranslate} size={0.8} />
				</NavbarDropdownTriggerButton>
				<NavbarDropdownContent>
					<NavbarDropdownItem onClick={() => alert("English Clicked")}>English</NavbarDropdownItem>
					<NavbarDropdownItem onClick={() => alert("Farsi clicked")}>فارسی</NavbarDropdownItem>
				</NavbarDropdownContent>
			</NavigationMenu.Item>
		),
	},
};
