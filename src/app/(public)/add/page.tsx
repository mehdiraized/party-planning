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
	MailIcon,
	Cake2Icon,
	Glass2Icon,
	BalloonIcon,
} from "@/components/icons";
import Image from "next/image";

export default function AddEvent() {
	const [step, setStep] = useState(4);
	const router = useRouter();

	const form = useForm({
		initialValues: {
			occasion: "",
			size: "",
			name: "",
			date: "",
			time: "",
			budget: "",
			invite: "",
			food: "",
			alcohol: "",
			decorator: "",
		},

		validate: {
			occasion: isNotEmpty("Enter Event Occasion"),
			size: isNotEmpty("Enter Event Size"),
			name: isNotEmpty("Enter Event name"),
			date: isNotEmpty("Enter Event date"),
			time: isNotEmpty("Enter Event time"),
			budget: isNotEmpty("Enter Event budget"),
			invite: isNotEmpty("Enter Event invite"),
			food: isNotEmpty("Enter Event food"),
			alcohol: isNotEmpty("Enter Event alcohol"),
			decorator: isNotEmpty("Enter Event alcohol"),
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
			{step === 4 && (
				<>
					<div className="flex flex-col items-center  mb-6">
						<MailIcon width={88} />
					</div>
					<div className="text-sm font-bold mb-4">
						Do you want to send e-invite?
					</div>
					<SelectButton
						name="invite"
						value={form.values.invite}
						setFieldValue={form.setFieldValue}
						variant="list"
						size="sm"
						centered={false}
						data={[
							{
								title: "Yes",
								value: true,
							},
							{
								title: "No",
								value: false,
							},
						]}
					/>
				</>
			)}
			{step === 5 && (
				<>
					<div className="flex flex-col items-center  mb-6">
						<Cake2Icon width={112} />
					</div>
					<div className="text-sm font-bold mb-4">
						What will be the food arrangements?
					</div>
					<SelectButton
						name="food"
						value={form.values.food}
						setFieldValue={form.setFieldValue}
						variant="list"
						size="sm"
						centered={false}
						data={[
							{
								title: "Order-in",
								value: "order-in",
							},
							{
								title: "Home cooked food",
								value: "home-cooked-food",
							},
							{
								title: "Book a caterer",
								value: "book-caterer",
							},
							{
								title: "Potluck",
								value: "potluck",
							},
						]}
					/>
				</>
			)}
			{step === 6 && (
				<>
					<div className="flex flex-col items-center  mb-6">
						<Glass2Icon width={100} />
					</div>
					<div className="text-sm font-bold mb-4">Will there be alcohol?</div>
					<SelectButton
						name="alcohol"
						value={form.values.alcohol}
						setFieldValue={form.setFieldValue}
						variant="list"
						size="sm"
						centered={false}
						data={[
							{
								title: "Yes, I need to order it",
								value: "yes-order",
							},
							{
								title: "Yes, I have it ",
								value: "yes",
							},
							{
								title: "Bring your own bottle",
								value: "own-bottle",
							},
							{
								title: "No",
								value: "no",
							},
						]}
					/>
				</>
			)}
			{step === 7 && (
				<>
					<div className="flex flex-col items-center  mb-6">
						<BalloonIcon width={71} />
					</div>
					<div className="text-sm font-bold mb-4">
						Do you wish to hire a decorator?
					</div>
					<SelectButton
						name="decorator"
						value={form.values.decorator}
						setFieldValue={form.setFieldValue}
						variant="list"
						size="sm"
						centered={false}
						data={[
							{
								title: "Yes",
								value: "yes",
							},
							{
								title: "No",
								value: "no",
							},
							{
								title: "I will decorate myself",
								value: "myself",
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
					disabled={
						(step === 1 && !form.isValid("occasion")) ||
						(step === 2 && !form.isValid("size")) ||
						(step === 3 &&
							(!form.isValid("name") ||
								!form.isValid("date") ||
								!form.isValid("time") ||
								!form.isValid("budget"))) ||
						(step === 4 && !form.isValid("invite")) ||
						(step === 5 && !form.isValid("food")) ||
						(step === 6 && !form.isValid("alcohol")) ||
						(step === 7 && !form.isValid("decorator"))
					}
				>
					Next
				</Button>
			</BottomFix>
		</>
	);
}
