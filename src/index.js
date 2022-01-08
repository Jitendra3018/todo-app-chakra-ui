import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// 1. import `ChakraProvider` component
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

// When the dark mode is not working then do the following:
// import { extendTheme } from "@chakra-ui/react";

// const config = {
// 	initialColorMode: "light",
// 	useSystemColorMode: false,
// };

// const theme = extendTheme({
// 	config,
// });

ReactDOM.render(
	<React.StrictMode>
		{/* When the dark mode is not working then do the following:
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			</ChakraProvider> */}
		{/* 2. Wrap ChakraProvider at the root of your app */}
		<ChakraProvider>
			<ColorModeScript initialColorMode="system" />
			<App />
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
