import React from "react";
import type { Preview } from "@storybook/react";
import ClientApp from "../src/components/ClientApp";
import { Provider } from "react-redux";
import "../src/app/globals.css";
import store from "../src/redux/configureStore";

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
	decorators: [
		(Story) => (
			<Provider store={store}>
				<ClientApp>
					<Story />
				</ClientApp>
			</Provider>
		),
	],
};

export default preview;
