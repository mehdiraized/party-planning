"use client";
import { ActionIcon, Button, Progress } from "@mantine/core";
import { useForm, isNotEmpty } from "@mantine/form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SelectButton from "@/components/form/SelectButton";
import BottomFix from "@/components/BottomFix";
import {
	BackIcon,
	CakeIcon,
	StarsIcon,
	GlassIcon,
	PlateIcon,
	HeartIcon,
} from "@/components/icons";

export default function AddEvent() {
	const [step, setStep] = useState(1);
	const router = useRouter();

	const form = useForm({
		initialValues: {
			occasion: "",
			email: "",
		},

		validate: {
			occasion: isNotEmpty("Enter Event Occasion"),
			email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
		},
	});

	return (
		<>
			{console.log({ values: form.values })}
			<header className="mb-4 flex items-center w-full">
				<ActionIcon
					variant="transparent"
					aria-label="Back"
					onClick={() => {
						if (step === 1) {
							router.push("/");
						} else {
							setStep((prev) => prev - 1);
						}
					}}
				>
					<BackIcon fill="#fff" />
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
						name="occasion"
						value={form.values.occasion}
						setFieldValue={form.setFieldValue}
						data={[
							{
								icon: <CakeIcon fill="#D898FF" />,
								title: "Birthday",
								value: "birthday",
							},
							{
								icon: <HeartIcon fill="#FF9A98" />,
								title: "Anniversary",
								value: "anniversary",
							},
							{
								icon: <PlateIcon fill="#98FF9C" />,
								title: "Dinner",
								value: "dinner",
							},
							{
								icon: <GlassIcon fill="#76A9FF" />,
								title: "Meet up",
								value: "meet-up",
							},
							{
								icon: <StarsIcon fill="#FFED9B" />,
								title: "Other",
								value: "other",
							},
						]}
					/>
				</>
			)}
			<BottomFix>
				<Button
					className="bg-blue-400 text-white font-bold relative disabled:opacity-50"
					size="md"
					fullWidth
					onClick={() => setStep((prev) => prev + 1)}
					disabled={step === 1 && !form.isValid("occasion")}
				>
					Next
				</Button>
			</BottomFix>
		</>
	);
}
