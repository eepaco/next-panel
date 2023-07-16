import store from "@/redux/configureStore";
import { uiConfigSlice } from "@/redux/UIConfig/UIConfigSlice";
import { getComputedCssGlobalColors, mapPropetiesToCss } from "./cssGlobalVariables";

type Themes = "light" | "dark" | "mariner";

export const changeTheme = (theme: Themes) => {
	store.dispatch(uiConfigSlice.actions.setTheme(theme));

	let styleElement = document.getElementById("global-variables");
	styleElement!.innerHTML =
		`:root { \n` +
		mapPropetiesToCss(
			{
				"primary-color": themes[theme]["primary-color"],
				"secondary-color": themes[theme]["secondary-color"],
			},
			getComputedCssGlobalColors(themes[theme])
		) +
		`\n}`;
};

export const themes = {
	light: {
		"primary-color": "#499258",
		"secondary-color": "#323232",
	},
	dark: {
		"primary-color": "#1f1f1f",
		"secondary-color": "#323232",
		"navbar-dropdown_menu-background-color": "#1f1f1f",
		"navbar-dropdown_menu_item-background-hover-color": "#323232",
		"navbar-dropdown_menu_item-text-color": "#ffffff",
	},
	mariner: {
		"primary-color": "#2b76b9",
		"secondary-color": "#ffffff",
	},
};
