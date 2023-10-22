function Calendar(props) {
	const fill = props.fill || "currentColor";
	const strokewidth = props.strokewidth || 1;
	const width = props.width || "100%";
	const height = props.height || "100%";

	return (
		<svg
			height={height}
			width={width}
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g fill="none">
				<g id="1698014669537-918666_calendar" opacity=".8">
					<path
						id="1698014669537-918666_Vector"
						d="M18 5.143H6c-.947 0-1.714.767-1.714 1.714v12c0 .947.767 1.714 1.714 1.714h12c.947 0 1.714-.767 1.714-1.714v-12c0-.947-.767-1.714-1.714-1.714z"
						stroke={fill}
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={strokewidth}
					/>
					<path
						id="1698014669537-918666_Vector_2"
						d="M15.429 3.429v3.428"
						stroke={fill}
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={strokewidth}
					/>
					<path
						id="1698014669537-918666_Vector_3"
						d="M8.571 3.429v3.428"
						stroke={fill}
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={strokewidth}
					/>
					<path
						id="1698014669537-918666_Vector_4"
						d="M4.286 10.286h15.428"
						stroke={fill}
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={strokewidth}
					/>
				</g>
			</g>
		</svg>
	);
}

export default Calendar;
