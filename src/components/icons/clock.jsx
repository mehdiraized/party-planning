function Clock(props) {
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
				<g id="1698014669536-3588106_clock" opacity=".8">
					<path
						id="1698014669536-3588106_Vector"
						d="M12 20.571A8.571 8.571 0 1 0 12 3.43a8.571 8.571 0 0 0 0 17.142z"
						stroke={fill}
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={strokewidth}
					/>
					<path
						id="1698014669536-3588106_Vector_2"
						d="M12 6.857V12l3.429 1.714"
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

export default Clock;
