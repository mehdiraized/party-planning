import React from "react";
import cx from "clsx";

import s from "./SelectButton.module.scss";

type DataType = {
	icon?: JSX.Element;
	title: string;
	description?: string;
	value: string | boolean;
};

export default function SelectButton({
	variant = "grid",
	size = "md",
	centered = true,
	data,
	name,
	value,
	setFieldValue,
}: {
	variant?: "list" | "grid";
	size?: "sm" | "md";
	centered?: boolean;
	data: DataType[];
	name: string;
	value: string;
	setFieldValue: (name: string, value: string | boolean) => void;
}) {
	return (
		<div
			className={
				variant === "grid" ? "grid grid-cols-3 gap-4" : "grid grid-cols-1 gap-4"
			}
		>
			{data.map((item, i) => (
				<button
					className={cx(
						s.option,
						value === item.value && s.active,
						size === "sm" && s.sizeSm,
						centered && s.center
					)}
					key={`items_${i}`}
					onClick={() => setFieldValue(name, item.value)}
				>
					{item.icon && <i>{item.icon}</i>}
					{item.title}
					{item.description && (
						<span className="text-sm text-white font-normal">
							{item.description}
						</span>
					)}
				</button>
			))}
		</div>
	);
}
