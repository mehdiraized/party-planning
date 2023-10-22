"use client";

import { createTheme } from "@mantine/core";

export const theme = createTheme({
	fontFamily: "var(--font-base)",
	headings: {
		fontFamily: "var(--font-base)",
	},
	primaryColor: "mainColor", // #76A9FF <- blue-400
	colors: {
		mainColor: [
			"#e6f2ff",
			"#cee1ff",
			"#9bc1ff",
			"#649eff",
			"#3981fe",
			"#1d6efe",
			"#0965ff",
			"#0054e4",
			"#004bcc",
			"#0041b5",
		],
	},
});
