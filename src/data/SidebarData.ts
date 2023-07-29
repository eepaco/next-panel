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
			title: inlt.formatMessage({ id: "sidebar.dashboard", defaultMessage: "default" }),
			icon: mdiSpeedometer,
			hasSubmenu: true,
			subMenuData: [
				{
					title: inlt.formatMessage({ id: "sidebar.monitor", defaultMessage: "default" }),
					href: "/dashboard/monitor",
					icon: null,
					hasSubmenu: false,
				},
				{
					title: inlt.formatMessage({ id: "sidebar.system", defaultMessage: "default" }),
					href: "/dashboard/system",
					icon: mdiWallFire,
					hasSubmenu: true,
					subMenuData: [
						{
							title: inlt.formatMessage({ id: "sidebar.system1", defaultMessage: "default" }),
							href: "/system1",
							icon: null,
							hasSubmenu: false,
						},
						{
							title: inlt.formatMessage({ id: "sidebar.system2", defaultMessage: "default" }),
							href: "/system2",
							icon: null,
							hasSubmenu: false,
						},
						{
							title: inlt.formatMessage({ id: "sidebar.system3", defaultMessage: "default" }),
							href: "/system3",
							icon: null,
							hasSubmenu: false,
						},
					],
				},
				{
					title: inlt.formatMessage({ id: "sidebar.test1", defaultMessage: "default" }),
					href: "/dashboard/test1",
					icon: null,
					hasSubmenu: false,
				},
				{
					title: inlt.formatMessage({ id: "sidebar.test2", defaultMessage: "default" }),
					href: "/dashboard/test2",
					icon: null,
					hasSubmenu: false,
				},
			],
		},
		{
			title: inlt.formatMessage({ id: "sidebar.test3", defaultMessage: "default" }),
			icon: mdiNetworkOutline,
			hasSubmenu: true,
			subMenuData: [
				{
					title: inlt.formatMessage({ id: "sidebar.test4", defaultMessage: "default" }),
					href: "/test4",
					icon: null,
					hasSubmenu: false,
				},
				{
					title: inlt.formatMessage({ id: "sidebar.test5", defaultMessage: "default" }),
					href: "/test5",
					icon: null,
					hasSubmenu: false,
				},
				{
					title: inlt.formatMessage({ id: "sidebar.test6", defaultMessage: "default" }),
					href: "/test6",
					icon: null,
					hasSubmenu: false,
				},
				{
					title: inlt.formatMessage({ id: "sidebar.test7", defaultMessage: "default" }),
					href: "/test7",
					icon: null,
					hasSubmenu: false,
				},
				{
					title: inlt.formatMessage({ id: "sidebar.test8", defaultMessage: "default" }),
					href: "/test8",
					icon: null,
					hasSubmenu: false,
				},
			],
		},
		{
			title: inlt.formatMessage({ id: "sidebar.test9", defaultMessage: "default" }),
			icon: mdiPoliceBadgeOutline,
			hasSubmenu: true,
			subMenuData: [
				{
					title: inlt.formatMessage({ id: "sidebar.test10", defaultMessage: "default" }),
					href: "/test10",
					icon: null,
					hasSubmenu: false,
				},
				{
					title: inlt.formatMessage({ id: "sidebar.test11", defaultMessage: "default" }),
					href: "/test11",
					icon: null,
					hasSubmenu: false,
				},
				{
					title: inlt.formatMessage({ id: "sidebar.test12", defaultMessage: "default" }),
					href: "/test12",
					icon: null,
					hasSubmenu: false,
				},
			],
		},
	];
}

export default SidebarData;
