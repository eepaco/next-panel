import React from "react";
import { ToastContainer, ToastContainerProps } from "react-toastify";
import { useAppSelector } from "../../hooks/useRedux";
import "react-toastify/dist/ReactToastify.css";

function Toast(props: ToastContainerProps) {
	const { theme, dir } = useAppSelector((state) => state.uiConfig);

	return (
		<>
			<ToastContainer
				position={dir === "rtl" ? "bottom-left" : "bottom-right"}
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop
				closeOnClick
				rtl={dir === "rtl"}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme={theme === "dark" ? "dark" : "light"}
				limit={5}
				{...props}
			/>
		</>
	);
}

export default Toast;
