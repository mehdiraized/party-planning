"use client";
import { ActionIcon, Button, Progress } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SelectButton from "@/components/form/SelectButton";
import Back from "@/components/icons/back";
import Cake from "@/components/icons/cake";

export default function AddEvent() {
	const [step, setStep] = useState(1);
	const router = useRouter();

	console.log(Math.ceil((100 / 7) * step));

	return (
		<>
			<header className="mb-4 flex items-center w-full">
				<ActionIcon
					variant="transparent"
					aria-label="Back"
					onClick={() => router.push("/")}
				>
					<Back fill="#fff" />
				</ActionIcon>
				<div className="text-lg font-bold tracking-wide pl-3">
					Create a New Event
				</div>
			</header>
			<Progress
				className="mb-4"
				radius="xs"
				size="xs"
				value={Math.ceil((100 / 7) * step)}
			/>
			{step === 1 && (
				<>
					<div className="text-sm font-bold mb-4">What is the occasion?</div>
					<SelectButton
						data={[
							{ icon: <Cake />, title: "Birthday", value: "birthday" },
							{ icon: <Cake />, title: "Anniversary", value: "anniversary" },
							{ icon: <Cake />, title: "Dinner", value: "dinner" },
							{ icon: <Cake />, title: "Meet up", value: "meet-up" },
							{ icon: <Cake />, title: "Other", value: "other" },
						]}
					/>
				</>
			)}
		</>
	);
}
