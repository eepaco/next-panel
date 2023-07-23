import { mdiWallFire, mdiSpeedometer, mdiNetworkOutline, mdiPoliceBadgeOutline } from "@mdi/js";
import { ReactNode } from "react";
import { IntlShape } from "react-intl";

export interface SidebarType {
	title: string;
	icon: ReactNode;
	hasSubmenu: boolean;
	subMenuData: any[];
}

function SidebarData(inlt: IntlShape): SidebarType[] {
	return [
		{
			title: inlt.formatMessage({ id: "sidebar.dashboard" }),
			icon: mdiSpeedometer,
			hasSubmenu: true,
			subMenuData: [
				{
					title: inlt.formatMessage({ id: "sidebar.monitor" }),
					href: "/dashboard/monitor",
					icon: null,
					hasSubmenu: false,
				},
				{
					title: inlt.formatMessage({ id: "sidebar.system" }),
					href: "/dashboard/system",
					icon: mdiWallFire,
					hasSubmenu: true,
					subMenuData: [
						{
							title: inlt.formatMessage({ id: "sidebar.system1" }),
							href: "/system1",
							icon: null,
							hasSubmenu: false,
						},
						{
							title: inlt.formatMessage({ id: "sidebar.system2" }),
							href: "/system2",
							icon: null,
							hasSubmenu: false,
						},
						{
							title: inlt.formatMessage({ id: "sidebar.system3" }),
							href: "/system3",
							icon: null,
							hasSubmenu: false,
						},
					],
				},
				{
					title: inlt.formatMessage({ id: "sidebar.test1" }),
					href: "/dashboard/test1",
					icon: null,
					hasSubmenu: false,
				},
				{
					title: inlt.formatMessage({ id: "sidebar.test2" }),
					href: "/dashboard/test2",
					icon: null,
					hasSubmenu: false,
				},
			],
		},
		{
			title: inlt.formatMessage({ id: "sidebar.test3" }),
			icon: mdiNetworkOutline,
			hasSubmenu: true,
			subMenuData: [
				{
					title: inlt.formatMessage({ id: "sidebar.test4" }),
					href: "/test4",
					icon: null,
					hasSubmenu: false,
				},
				{
					title: inlt.formatMessage({ id: "sidebar.test5" }),
					href: "/test5",
					icon: null,
					hasSubmenu: false,
				},
				{
					title: inlt.formatMessage({ id: "sidebar.test6" }),
					href: "/test6",
					icon: null,
					hasSubmenu: false,
				},
				{
					title: inlt.formatMessage({ id: "sidebar.test7" }),
					href: "/test7",
					icon: null,
					hasSubmenu: false,
				},
				{
					title: inlt.formatMessage({ id: "sidebar.test8" }),
					href: "/test8",
					icon: null,
					hasSubmenu: false,
				},
			],
		},
		{
			title: inlt.formatMessage({ id: "sidebar.test9" }),
			icon: mdiPoliceBadgeOutline,
			hasSubmenu: true,
			subMenuData: [
				{
					title: inlt.formatMessage({ id: "sidebar.test10" }),
					href: "/test10",
					icon: null,
					hasSubmenu: false,
				},
				{
					title: inlt.formatMessage({ id: "sidebar.test11" }),
					href: "/test11",
					icon: null,
					hasSubmenu: false,
				},
				{
					title: inlt.formatMessage({ id: "sidebar.test12" }),
					href: "/test12",
					icon: null,
					hasSubmenu: false,
				},
			],
		},
	];
}

export default SidebarData;
