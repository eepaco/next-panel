import type { Meta, StoryObj } from "@storybook/react";
import { mdiMenu } from "@mdi/js";
import NavbarItem from "./NavbarItem";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Icon from "@mdi/react";

const meta: Meta<typeof NavbarItem> = {
	title: "Navbar",
	component: NavbarItem,
	decorators: [
		(story: any) => (
			<NavigationMenu.Root>
				<NavigationMenu.List
					className={`bg-[--navbar-background-color] text-[--navbar-item-text-color]
          flex flex-row items-stretch justify-between h-[2.6rem] left-[100%]
          `}
				>
					{story()}
				</NavigationMenu.List>
			</NavigationMenu.Root>
		),
	],
};
export default meta;

type Story = StoryObj<typeof NavbarItem>;

export const NavigationItem: Story = {
	args: {
		children: <Icon path={mdiMenu} size={0.8} />,
	},
};
