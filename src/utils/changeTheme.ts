import store from "@/redux/configureStore";
import { uiConfigSlice } from "@/redux/UIConfig/UIConfigSlice";

type TThemes = "light" | "dark";

export const changeTheme = (theme: TThemes) => {
  store.dispatch(uiConfigSlice.actions.setTheme(theme));

  applyGlobalColors(themes[theme]);
};

export const applyGlobalColors = (colors: any) => {
  let variables = `:root{`;

  if (!colors["navbar-background-color"]) {
    variables += `--navbar-background-color: ${"73 146 88"};`;
  }

  variables += `}`;

  document.getElementById("global-style")!.innerHTML = variables;
};

export const themes = {
  light: {
    "primary-color": "73 146 88",
    "secondary-color": "20 20 20",
  },
  dark: {
    "primary-color": "173 46 188",
    "secondary-color": "220 220 220",
  },
};
