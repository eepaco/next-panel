import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const uiConfigSlice = createSlice({
  name: "uiConfig",
  initialState: {
    dir: "ltr",
    lang: "en",
    theme: "light",
  },
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
  },
});

export const { setDir, setLang, setTheme } = uiConfigSlice.actions;

export default uiConfigSlice.reducer;
