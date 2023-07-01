import { configureStore } from "@reduxjs/toolkit";
import UIConfigSlice from "./UIConfig/UIConfigSlice";
import UserSlice from "./user/UserSlice";
import { createWrapper } from "next-redux-wrapper";

const store = configureStore({
  reducer: {
    user: UserSlice,
    uiConfig: UIConfigSlice,
  },
});

export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import UIConfigSlice from "./UIConfig/UIConfigSlice";
// import UserSlice from "./user/UserSlice";
// import { createWrapper } from "next-redux-wrapper";

// // const store = configureStore({
// //   reducer: {
// //     user: UserSlice,
// //     uiConfig: UIConfigSlice,
// //   },
// // });

// const makeStore = () =>
//   configureStore({
//     reducer: {
//       user: UserSlice,
//       uiConfig: UIConfigSlice,
//     },
//     devTools: true,
//   });

// export const wrapper = createWrapper(makeStore);

// // export default store;
