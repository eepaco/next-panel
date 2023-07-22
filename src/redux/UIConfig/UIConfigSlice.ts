import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIConfigState {
	dir: string;
	lang: string;
	theme: string;
	isSidebarOpen: boolean;
	isSidebarHoverDisabled: boolean;
}

const initialState: UIConfigState = {
	dir: "ltr",
	lang: "en",
	theme: "light",
	isSidebarOpen: true,
	isSidebarHoverDisabled: true,
};

export const uiConfigSlice = createSlice({
	name: "uiConfig",
	initialState,
	reducers: {
		setDir: (state, action: PayloadAction<string>) => {
			state.dir = action.payload;
		},
		setLang: (state, action: PayloadAction<string>) => {
			state.lang = action.payload;
		},
		setTheme: (state, action: PayloadAction<string>) => {
			state.theme = action.payload;
		},
		setIsSidebarOpen: (state, action: PayloadAction<boolean>) => {
			state.isSidebarOpen = action.payload;
		},
		setIsSidebarHoverDisabled: (state, action: PayloadAction<boolean>) => {
			state.isSidebarHoverDisabled = action.payload;
		},
	},
});

export const { setDir, setLang, setTheme, setIsSidebarOpen, setIsSidebarHoverDisabled } =
	uiConfigSlice.actions;

export default uiConfigSlice.reducer;
