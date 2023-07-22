import { configureStore } from "@reduxjs/toolkit";
import UIConfigSlice from "./UIConfig/UIConfigSlice";
import UserSlice from "./user/UserSlice";

const store = configureStore({
	reducer: {
		user: UserSlice,
		uiConfig: UIConfigSlice,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
