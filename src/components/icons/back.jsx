function Back(props) {
	const fill = props.fill || "currentColor";
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
				<g id="1697973470162-8650637_back_icon">
					<path
						id="1697973470162-8650637_Vector"
						d="M18.75 12a.667.667 0 0 1-.667.667H7.446l3.702 3.952a.644.644 0 0 1-.94.881l-4.812-5.122a.552.552 0 0 1 0-.748l4.813-5.13a.644.644 0 0 1 .94.881l-3.703 3.952h10.637c.369 0 .667.299.667.667z"
						fill={fill}
					/>
				</g>
			</g>
		</svg>
	);
}

export default Back;
