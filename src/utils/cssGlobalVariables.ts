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
	"sidebar-header-text-color": string;
	"sidebar-header-background-color": string;
	"sidebar-header-background-hover-color": string;
	"sidebar-trigger-background-color": string;
	"sidebar-trigger_text-color": string;
	"sidebar-trigger_icon-color": string;
	"sidebar-trigger-background-active-color": string;
	"sidebar-trigger_text-active-color": string;
	"sidebar-trigger_icon-active-color": string;
	"sidebar-item-text-color": string;
	"sidebar-item-background-active-color": string;
	"sidebar-item-background-hover-color": string;
	"sidebar-content-background-active-color": string;
};

type CssWidgetGlobalHexColors = {
	"widget-background-color": string;
	"widget-border-color": string;
	"widget-heading-color": string;
	"widget-content-color": string;
	"widget-dropdown_menu_button-color": string;
	"widget-dropdown_menu-background-color": string;
	"widget-dropdown_menu-text-color": string;
	"widget-dropdown_menu-background-hover-color": string;
	"widget-dropdown_menu-text-hover-color": string;
	"widget-dropdown_menu-background-active-color": string;
	"widget-dropdown_menu-text-active-color": string;
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
		Partial<
			CssBodyGlobalHexColors &
				CssNavbarGlobalHexColors &
				CssSidebarGlobalHexColors &
				CssWidgetGlobalHexColors
		>
): CssBodyGlobalHexColors &
	CssNavbarGlobalHexColors &
	CssSidebarGlobalHexColors &
	CssWidgetGlobalHexColors {
	const primaryColor = variables["primary-color"];
	const secondaryColor = variables["secondary-color"];

	console.log("fff", getContrastColor("#499258"));

	return new TypedMergeable({
		"body-background-color":
			variables["body-background-color"] ?? adjustColorBrightness(secondaryColor, -6),
		"navbar-background-color": variables["navbar-background-color"] ?? primaryColor,
		"sidebar-background-color": variables["sidebar-background-color"] ?? secondaryColor,
	}).merge((obj) => ({
		"navbar-item-text-color":
			variables["navbar-item-text-color"] ?? getContrastColor(obj["navbar-background-color"]),
		"navbar-item-background-hover-color":
			variables["navbar-item-background-hover-color"] ??
			adjustColorBrightness(obj["navbar-background-color"], 10),
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

		"sidebar-header-background-color": variables["sidebar-header-background-color"] ?? "",
		"sidebar-header-background-hover-color":
			variables["sidebar-header-background-hover-color"] ??
			adjustColorBrightness(obj["sidebar-background-color"], -10),
		"sidebar-header-text-color":
			variables["sidebar-header-text-color"] ??
			adjustColorBrightness(obj["sidebar-background-color"], -540),
		"sidebar-trigger-background-color":
			variables["sidebar-trigger-background-color"] ?? obj["sidebar-background-color"],
		"sidebar-trigger_text-color":
			variables["sidebar-trigger_text-color"] ?? getContrastColor(obj["sidebar-background-color"]),
		"sidebar-trigger_icon-color":
			variables["sidebar-trigger_icon-color"] ?? getContrastColor(obj["sidebar-background-color"]),
		"sidebar-trigger-background-active-color":
			variables["sidebar-trigger-background-active-color"] ??
			adjustColorBrightness(obj["sidebar-background-color"], -8),
		"sidebar-trigger_text-active-color":
			variables["sidebar-trigger_text-active-color"] ?? primaryColor,
		"sidebar-trigger_icon-active-color":
			variables["sidebar-trigger_icon-active-color"] ?? primaryColor,
		"sidebar-item-text-color":
			variables["sidebar-item-text-color"] ?? getContrastColor(obj["sidebar-background-color"]),
		"sidebar-item-background-active-color":
			variables["sidebar-item-background-active-color"] ??
			getBrightness(obj["sidebar-background-color"]) > 125
				? adjustColorBrightness(obj["sidebar-background-color"], -8)
				: adjustColorBrightness(obj["sidebar-background-color"], 8),
		"sidebar-item-background-hover-color":
			variables["sidebar-item-background-hover-color"] ??
			getBrightness(obj["sidebar-background-color"]) > 125
				? adjustColorBrightness(obj["sidebar-background-color"], -6)
				: adjustColorBrightness(obj["sidebar-background-color"], 6),
		"sidebar-content-background-active-color":
			variables["sidebar-content-background-active-color"] ??
			getBrightness(obj["sidebar-background-color"]) > 125
				? adjustColorBrightness(obj["sidebar-background-color"], -4)
				: adjustColorBrightness(obj["sidebar-background-color"], 4),

		"widget-background-color":
			variables["widget-background-color"] ??
			adjustColorBrightness(obj["body-background-color"], 10),
		"widget-border-color": variables["widget-border-color"] ?? "#b3b3b3",
		"widget-heading-color":
			variables["widget-heading-color"] ?? getContrastColor(obj["body-background-color"]),
		"widget-content-color": variables["widget-content-color"] ?? "#8c8c8c",
		"widget-dropdown_menu_button-color":
			variables["widget-dropdown_menu_button-color"] ??
			getContrastColor(obj["body-background-color"]),
		"widget-dropdown_menu-background-color":
			variables["widget-dropdown_menu-background-color"] ??
			adjustColorBrightness(obj["body-background-color"], 20),
		"widget-dropdown_menu-text-color":
			variables["widget-dropdown_menu-text-color"] ??
			getContrastColor(obj["body-background-color"]),
		"widget-dropdown_menu-background-hover-color":
			variables["widget-dropdown_menu-background-hover-color"] ??
			getContrastColor(obj["body-background-color"]),
		"widget-dropdown_menu-text-hover-color":
			variables["widget-dropdown_menu-text-hover-color"] ??
			(getContrastColor(obj["body-background-color"]) === "#ffffff" ? "#000000" : "#ffffff"),
		"widget-dropdown_menu-background-active-color":
			variables["widget-dropdown_menu-background-active-color"] ??
			getContrastColor(obj["body-background-color"]),
		"widget-dropdown_menu-text-active-color":
			variables["widget-dropdown_menu-text-active-color"] ??
			(getContrastColor(obj["body-background-color"]) === "#ffffff" ? "#000000" : "#ffffff"),
	})).value;
}

export function mapPropetiesToCss(
	tailwindColors: CssTailwindGlobalHexColors,
	colors: CssBodyGlobalHexColors &
		CssNavbarGlobalHexColors &
		CssSidebarGlobalHexColors &
		CssWidgetGlobalHexColors
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

function rgbToHex(r: number, g: number, b: number): string {
	const hexR = r.toString(16).padStart(2, "0");
	const hexG = g.toString(16).padStart(2, "0");
	const hexB = b.toString(16).padStart(2, "0");
	return `#${hexR}${hexG}${hexB}`;
}

function getBrightness(hexColor: string): number {
	const rgb = hexToRgb(hexColor)!;

	// http://www.w3.org/TR/AERT#color-contrast
	const brightness = Math.round((rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000);

	return brightness;
}

// https://stackoverflow.com/a/11868159
function getContrastColor(hexColor: string): string {
	const brightness = getBrightness(hexColor);

	return brightness > 125 ? "#000000" : "#ffffff";
}

// from poe.com
function adjustColorBrightness(hexColor: string, percent: number): string {
	// Remove the '#' symbol and convert to RGB
	const rgbColor = hexToRgb(hexColor.substring(1));

	// Adjust brightness
	const adjustedRgbColor = {
		r: Math.round(Math.min(255, (rgbColor.r * (100 + percent)) / 100)),
		g: Math.round(Math.min(255, (rgbColor.g * (100 + percent)) / 100)),
		b: Math.round(Math.min(255, (rgbColor.b * (100 + percent)) / 100)),
	};

	// Convert RGB back to HEX
	const adjustedHexColor = rgbToHex(adjustedRgbColor.r, adjustedRgbColor.g, adjustedRgbColor.b);

	return adjustedHexColor;
}
