import s from "./SelectButton.module.scss";

type DataType = {
	icon: Element;
	title: string;
};

export default function SelectButton({ data }: { data: DataType[] }) {
	return (
		<div className="grid grid-cols-3 gap-4">
			<button className={s.option}>Birthday</button>
			<button className={s.option}>Anniversary</button>
			<button className={s.option}>Dinner</button>
			<button className={s.option}>Meet up</button>
			<button className={s.option}>Other</button>
		</div>
	);
}
