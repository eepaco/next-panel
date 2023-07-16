// [component]-[slot(s)]-modifier-[property]-[pseudo(s)]-unit
// modifiers: primary, secondary, warning, success, info, danger
// pseudos (https://mui.com/material-ui/customization/how-to-customize): active, checked, completed, disabled, error, expanded, focusVisible, focused, readOnly, required, selected

import TypedMergeable from "./TypedMergeable";

export type CssTailwindGlobalHexColors = {
	"primary-color": string;
	"secondary-color": string;
};

type CssBodyGlobalHexColors = {
	"body-background-color": string;
};

type CssNavbarGlobalHexColors = {
	"navbar-background-color": string;
	"navbar-item-text-color": string;
	"navbar-item-background-hover-color": string;
	"navbar-item-border-focus-color": string;
	"navbar-dropdown_menu-background-color": string;
	"navbar-dropdown_menu-border-color": string;
	"navbar-dropdown_menu_item-text-color": string;
	"navbar-dropdown_menu_item-background-hover-color": string;
};

type CssSidebarGlobalHexColors = {
	"sidebar-background-color": string;
	"sidebar-header-background-color": string;
	"sidebar-header-background-hover-color": string;
	"sidebar-item-background-color": string;
	"sidebar-item-background-hover-color": string;
	"sidebar-item-text-color": string;
	"sidebar-item-icon-color": string;
	"sidebar-item-text-active-color": string;
	"sidebar-item-icon-active-color": string;
	"sidebar-subitem-text-color": string;
	"sidebar-subitem-icon-color": string;
	"sidebar-subitem-text-hover-color": string;
	"sidebar-subitem-icon-hover-color": string;
};

type CssAlertGlobalHexColors = {
	"alert-warning-background-color": string;
	"alert-warning-text-color": string;
	"alert-danger-background-color": string;
	"alert-danger-text-color": string;
	"alert-success-background-color": string;
	"alert-success-text-color": string;
	"alert-info-background-color": string;
	"alert-info-text-color": string;
};

type CssButtonGlobalHexColors = {
	"button-background-color": string;
	"button-background-hover-color": string;
	"button-background-active-color": string;
	"button-background-active-hover-color": string;
	"button-background-disabled-color": string;
	"button-border-color": string;
	"button-border-hover-color": string;
	"button-border-active-color": string;
	"button-border-active-hover-color": string;
	"button-border-disabled-color": string;
	"button-text-color": string;
	"button-text-hover-color": string;
	"button-text-active-color": string;
	"button-text-active-hover-color": string;
	"button-text-disabled-color": string;
};

type CssInputGlobalHexColors = {
	"input-background-color": string;
	"input-background-focus-color": string;
	"input-border-color": string;
	"input-border-focus-color": string;
	"input-text-color": string;
	"input-placeholder-color": string;
};

export function getComputedCssGlobalColors(
	variables: CssTailwindGlobalHexColors &
		Partial<CssBodyGlobalHexColors & CssNavbarGlobalHexColors & CssSidebarGlobalHexColors>
): CssBodyGlobalHexColors & CssNavbarGlobalHexColors & CssSidebarGlobalHexColors {
	const primaryColor = variables["primary-color"];
	const secondaryColor = variables["secondary-color"];

	return new TypedMergeable({
		"body-background-color": primaryColor,
		"navbar-background-color": variables["navbar-background-color"] ?? primaryColor,
	}).merge((obj) => ({
		"navbar-item-text-color":
			variables["navbar-item-text-color"] ?? getContrastColor(obj["navbar-background-color"]),
		"navbar-item-background-hover-color":
			variables["navbar-item-background-hover-color"] ??
			`${Object.values(hexToRgb(obj["navbar-background-color"])).join(" ")} / 40`,
		"navbar-item-border-focus-color":
			variables["navbar-item-border-focus-color"] ??
			getContrastColor(obj["navbar-background-color"]),
		"navbar-dropdown_menu-background-color":
			variables["navbar-dropdown_menu-background-color"] ??
			getContrastColor(obj["navbar-background-color"]),
		"navbar-dropdown_menu_item-background-hover-color":
			variables["navbar-dropdown_menu_item-background-hover-color"] ?? "#e7e7e7",
		"navbar-dropdown_menu-border-color":
			variables["navbar-dropdown_menu-border-color"] ??
			(getContrastColor(obj["navbar-background-color"]) === "#ffffff" ? "#000000" : "#ffffff"),
		"navbar-dropdown_menu_item-text-color":
			variables["navbar-dropdown_menu_item-text-color"] ??
			(getContrastColor(obj["navbar-background-color"]) === "#ffffff" ? "#000000" : "#ffffff"),

		"sidebar-background-color": variables["sidebar-background-color"] ?? "",
		"sidebar-header-background-color": variables["sidebar-header-background-color"] ?? "",
		"sidebar-header-background-hover-color":
			variables["sidebar-header-background-hover-color"] ?? "",
		"sidebar-item-background-color": variables["sidebar-item-background-color"] ?? "",
		"sidebar-item-background-hover-color": variables["sidebar-item-background-hover-color"] ?? "",
		"sidebar-item-text-color": variables["sidebar-item-text-color"] ?? "",
		"sidebar-item-icon-color": variables["sidebar-item-icon-color"] ?? "",
		"sidebar-item-text-active-color": variables["sidebar-item-text-active-color"] ?? "",
		"sidebar-item-icon-active-color": variables["sidebar-item-icon-active-color"] ?? "",
		"sidebar-subitem-text-color": variables["sidebar-subitem-text-color"] ?? "",
		"sidebar-subitem-icon-color": variables["sidebar-subitem-icon-color"] ?? "",
		"sidebar-subitem-text-hover-color": variables["sidebar-subitem-text-hover-color"] ?? "",
		"sidebar-subitem-icon-hover-color": variables["sidebar-subitem-icon-hover-color"] ?? "",
	})).value;
}

export function mapPropetiesToCss(
	tailwindColors: CssTailwindGlobalHexColors,
	colors: CssBodyGlobalHexColors & CssNavbarGlobalHexColors & CssSidebarGlobalHexColors
) {
	const result = [];
	result.push(
		...Object.entries(tailwindColors).map(
			([key, value]) =>
				`--${key}: ${hexToRgb(value)!.r} ${hexToRgb(value)!.g} ${hexToRgb(value)!.b};`
		)
	);
	result.push(...Object.entries(colors).map(([key, value]) => `--${key}: ${value};`));

	return result.join("\n");
}

// https://stackoverflow.com/a/5624139
function hexToRgb(hex: string): { r: number; g: number; b: number } {
	// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
	var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	hex = hex.replace(shorthandRegex, function (m, r, g, b) {
		return r + r + g + g + b + b;
	});

	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result
		? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16),
		  }
		: { r: 0, g: 0, b: 0 };
}

// https://stackoverflow.com/a/11868159
function getContrastColor(hexColor: string): string {
	const rgb = hexToRgb(hexColor)!;

	// http://www.w3.org/TR/AERT#color-contrast
	const brightness = Math.round((rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000);
	return brightness > 125 ? "#000000" : "#ffffff";
}
