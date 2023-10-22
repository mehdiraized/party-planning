import cx from "clsx";

import s from "./BottomFix.module.scss";

type BottomFixProps = {
	row?: boolean;
	children: React.ReactNode;
	offsetHeight?: string | number | null;
};

function BottomFix({ row, children, offsetHeight }: BottomFixProps) {
	return (
		<>
			<div
				className={s.BottomFixOver}
				style={offsetHeight ? { height: offsetHeight } : {}}
			/>
			<div className={cx(s.BottomFix, row && s.flexRow)}>{children}</div>
		</>
	);
}

export default BottomFix;
