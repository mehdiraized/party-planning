function Rupee(props) {
	const fill = props.fill || "currentColor";
	const width = props.width || "100%";
	const height = props.height || "100%";

	return (
		<svg
			height={height}
			width={width}
			viewBox="0 0 11 16"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g fill="none">
				<path
					id="1698014669535-7599125_â¹"
					d="M7.171 5.651C7.054 6.74 6.631 7.62 5.903 8.29c-.729.67-1.821 1.113-3.278 1.331L8.063 16H5.425L0 9.658l.251-1.834h1.156c.41 0 .77-.017 1.08-.05.31-.034.577-.08.803-.138.235-.067.436-.147.603-.239.168-.1.323-.213.465-.339.368-.352.607-.82.716-1.407H0V3.818h5.049a2.321 2.321 0 0 0-.327-.829 2.35 2.35 0 0 0-.565-.628c-.234-.184-.544-.318-.93-.402-.376-.084-.883-.125-1.519-.125H0V0h10.85v1.834H6.029c.293.209.536.485.729.828.192.344.326.729.402 1.156h3.692V5.65H7.17z"
					fill={fill}
					opacity=".8"
				/>
			</g>
		</svg>
	);
}

export default Rupee;
