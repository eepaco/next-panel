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
	"widget-heading-background-color": string;
	"widget-heading-color": string;
	"widget-content-color": string;
	"widget-dropdown_menu_button-color": string;
	"widget-dropdown_menu-background-color": string;
	"widget-dropdown_menu-text-color": string;
	"widget-dropdown_menu-background-hover-color": string;
	"widget-dropdown_menu-text-hover-color": string;
	"widget-dropdown_menu-background-active-color": string;
	"widget-dropdown_menu-text-active-color": string;

	"widget-warning-background-color": string;
	"widget-warning-border-color": string;
	"widget-heading-warning-background-color": string;
	"widget-heading-warning-color": string;
	"widget-dropdown_menu_button-warning-color": string;

	"widget-danger-background-color": string;
	"widget-danger-border-color": string;
	"widget-heading-danger-background-color": string;
	"widget-heading-danger-color": string;
	"widget-dropdown_menu_button-danger-color": string;

	"widget-success-background-color": string;
	"widget-success-border-color": string;
	"widget-heading-success-background-color": string;
	"widget-heading-success-color": string;
	"widget-dropdown_menu_button-success-color": string;

	"widget-info-background-color": string;
	"widget-info-border-color": string;
	"widget-heading-info-background-color": string;
	"widget-heading-info-color": string;
	"widget-dropdown_menu_button-info-color": string;
};

type CssChartGlobalHexColors = {
	"linechart-stat_title-text-color": string;
	"linechart-stat_value-text-color": string;
	"chart-label-text-color": string;
};

type CssSemanticHexColors = {
	"warning-color": string;
	"success-color": string;
	"danger-color": string;
	"info-color": string;
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
				CssWidgetGlobalHexColors &
				CssChartGlobalHexColors &
				CssSemanticHexColors
		>
): CssBodyGlobalHexColors &
	CssNavbarGlobalHexColors &
	CssSidebarGlobalHexColors &
	CssWidgetGlobalHexColors &
	CssChartGlobalHexColors &
	CssSemanticHexColors {
	const primaryColor = variables["primary-color"];
	const secondaryColor = variables["secondary-color"];

	return new TypedMergeable({
		"body-background-color":
			variables["body-background-color"] ?? adjustColorBrightness(secondaryColor, -6),
		"navbar-background-color": variables["navbar-background-color"] ?? primaryColor,
		"sidebar-background-color": variables["sidebar-background-color"] ?? secondaryColor,
		"chart-label-text-color": variables["chart-label-text-color"] ?? "#8c8c8c",
		"warning-color": variables["warning-color"] ?? "#e28722",
		"danger-color": variables["danger-color"] ?? "#e74c3c",
		"success-color": variables["success-color"] ?? "#07bc0c",
		"info-color": variables["info-color"] ?? "#3498db",
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
			(getContrastColor(obj["navbar-background-color"]) === "#ffffff" ? "#000000" : "#ffffff"),
		"navbar-dropdown_menu_item-background-hover-color":
			variables["navbar-dropdown_menu_item-background-hover-color"] ??
			(getBrightness(obj["navbar-background-color"]) > 125
				? adjustColorBrightness("#ffffff", -10)
				: adjustColorBrightness("#1a1a1a", 50)),
		"navbar-dropdown_menu-border-color":
			variables["navbar-dropdown_menu-border-color"] ??
			getContrastColor(obj["navbar-background-color"]),
		"navbar-dropdown_menu_item-text-color":
			variables["navbar-dropdown_menu_item-text-color"] ??
			getContrastColor(obj["navbar-background-color"]),

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
		"widget-heading-background-color":
			variables["widget-heading-background-color"] ??
			adjustColorBrightness(obj["body-background-color"], 10),
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
		"widget-warning-background-color":
			variables["widget-warning-background-color"] ??
			(getBrightness(primaryColor) > 125
				? adjustColorBrightness(obj["warning-color"], 600)
				: adjustColorBrightness(obj["warning-color"], -87)),
		"widget-warning-border-color": variables["widget-warning-border-color"] ?? obj["warning-color"],
		"widget-heading-warning-background-color":
			variables["widget-heading-warning-background-color"] ?? obj["warning-color"],
		"widget-heading-warning-color": variables["widget-heading-warning-color"] ?? "#ffffff",
		"widget-dropdown_menu_button-warning-color":
			variables["widget-dropdown_menu_button-warning-color"] ?? "#ffffff",
		"widget-danger-background-color":
			variables["widget-danger-background-color"] ??
			(getBrightness(primaryColor) > 125
				? "#f5eced"
				: adjustColorBrightness(obj["danger-color"], -87)),
		"widget-danger-border-color": variables["widget-danger-border-color"] ?? obj["danger-color"],
		"widget-heading-danger-background-color":
			variables["widget-heading-danger-background-color"] ?? obj["danger-color"],
		"widget-heading-danger-color": variables["widget-heading-danger-color"] ?? "#ffffff",
		"widget-dropdown_menu_button-danger-color":
			variables["widget-dropdown_menu_button-danger-color"] ?? "#ffffff",
		"widget-success-background-color":
			variables["widget-success-background-color"] ??
			(getBrightness(primaryColor) > 125
				? adjustColorBrightness(obj["success-color"], 3350)
				: adjustColorBrightness(obj["success-color"], -87)),
		"widget-success-border-color": variables["widget-success-border-color"] ?? obj["success-color"],
		"widget-heading-success-background-color":
			variables["widget-heading-success-background-color"] ?? obj["success-color"],
		"widget-heading-success-color": variables["widget-heading-success-color"] ?? "#ffffff",
		"widget-dropdown_menu_button-success-color":
			variables["widget-dropdown_menu_button-success-color"] ?? "#ffffff",
		"widget-info-background-color":
			variables["widget-info-background-color"] ??
			(getBrightness(primaryColor) > 125
				? "#f2faff"
				: adjustColorBrightness(obj["info-color"], -87)),
		"widget-info-border-color": variables["widget-info-border-color"] ?? obj["info-color"],
		"widget-heading-info-background-color":
			variables["widget-heading-info-background-color"] ?? obj["info-color"],
		"widget-heading-info-color": variables["widget-heading-info-color"] ?? "#ffffff",
		"widget-dropdown_menu_button-info-color":
			variables["widget-dropdown_menu_button-info-color"] ?? "#ffffff",
		"linechart-stat_title-text-color": variables["linechart-stat_title-text-color"] ?? "#aaaaaa",
		"linechart-stat_value-text-color":
			variables["linechart-stat_value-text-color"] ??
			getContrastColor(obj["body-background-color"]),
	})).value;
}

export function mapPropetiesToCss(
	tailwindColors: CssTailwindGlobalHexColors,
	colors: CssBodyGlobalHexColors &
		CssNavbarGlobalHexColors &
		CssSidebarGlobalHexColors &
		CssWidgetGlobalHexColors &
		CssChartGlobalHexColors &
		CssSemanticHexColors
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
