"use client";

import {
	ActionIcon,
	Button,
	NumberInput,
	Progress,
	TextInput,
} from "@mantine/core";
import { TimeInput, DateInput } from "@mantine/dates";
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
	GroupIcon,
	Group2Icon,
	Group3Icon,
	CalendarIcon,
	ClockIcon,
	RupeeIcon,
} from "@/components/icons";

export default function AddEvent() {
	const [step, setStep] = useState(1);
	const router = useRouter();

	const form = useForm({
		initialValues: {
			occasion: "",
			size: "",
			name: "",
			date: "",
			time: "",
			budget: "",
		},

		validate: {
			occasion: isNotEmpty("Enter Event Occasion"),
			size: isNotEmpty("Enter Event Size"),
			name: isNotEmpty("Enter Event name"),
			date: isNotEmpty("Enter Event date"),
			time: isNotEmpty("Enter Event time"),
			budget: isNotEmpty("Enter Event budget"),
		},
	});

	return (
		<>
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
				color="#76A9FF"
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
			{step === 2 && (
				<>
					<div className="text-sm font-bold mb-4">
						What is the size of the guest list?
					</div>
					<SelectButton
						name="size"
						value={form.values.size}
						setFieldValue={form.setFieldValue}
						data={[
							{
								icon: <GroupIcon fill="#D898FF" />,
								title: "Small",
								description: "(4-20 guests)",
								value: "small",
							},
							{
								icon: <Group2Icon fill="#FF9A98" />,
								title: "Medium",
								description: "(20-60 guests)",
								value: "medium",
							},
							{
								icon: <Group3Icon fill="#98FF9C" />,
								title: "Large",
								description: "(60+ guests)",
								value: "large",
							},
						]}
					/>
				</>
			)}
			{step === 3 && (
				<>
					<TextInput label="Event Name" {...form.getInputProps("name")} />
					<DateInput
						label="Date"
						mt="md"
						rightSection={<CalendarIcon width={24} />}
						{...form.getInputProps("date")}
					/>
					<TimeInput
						label="Time"
						mt="md"
						rightSection={<ClockIcon width={24} />}
						{...form.getInputProps("time")}
					/>
					<NumberInput
						label="Budget"
						mt="md"
						prefix="₹"
						rightSection={<RupeeIcon width={10} />}
						rightSectionPointerEvents="none"
						{...form.getInputProps("budget")}
					/>
				</>
			)}
			<BottomFix>
				<Button
					className="bg-blue-400 text-white font-bold relative disabled:opacity-50"
					size="md"
					fullWidth
					onClick={() => setStep((prev) => prev + 1)}
					disabled={
						(step === 1 && !form.isValid("occasion")) ||
						(step === 2 && !form.isValid("size")) ||
						(step === 3 &&
							(!form.isValid("name") ||
								!form.isValid("date") ||
								!form.isValid("time") ||
								!form.isValid("budget")))
					}
				>
					Next
				</Button>
			</BottomFix>
		</>
	);
}
