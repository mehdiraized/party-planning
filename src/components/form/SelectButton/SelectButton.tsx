import React from "react";
import cx from "clsx";

import s from "./SelectButton.module.scss";

type DataType = {
	icon: JSX.Element;
	title: string;
	description?: string;
	value: string;
};

export default function SelectButton({
	data,
	name,
	value,
	setFieldValue,
}: {
	data: DataType[];
	name: string;
	value: string;
	setFieldValue: (name: string, value: string) => void;
}) {
	return (
		<div className="grid grid-cols-3 gap-4">
			{data.map((item, i) => (
				<button
					className={cx(s.option, value === item.value && s.active)}
					key={`items_${i}`}
					onClick={() => setFieldValue(name, item.value)}
				>
					<i>{item.icon}</i>
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
