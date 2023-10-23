"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@mantine/core";
import { CakeIcon, HeartIcon } from "@/components/icons";
import { eventsStore } from "@/store/event";

export default function Home() {
	const events = useSyncExternalStore(
		eventsStore.subscribe,
		eventsStore.getSnapshot
	);

	return (
		<>
			<header className="mb-4 flex items-center justify-between w-full">
				<div className="text-white text-lg font-bold tracking-wide">
					Hi, Ishita 👋
				</div>
				<div className="w-10 h-10 rounded-full border border-blue-400 p-1">
					<Image
						alt=""
						width={32}
						height={32}
						className="rounded-full"
						src="/avatar.png"
					/>
				</div>
			</header>
			{events.length > 0 ? (
				<>
					<div className="flex justify-between items-center mb-4">
						<div className="text-base font-bold">Upcoming</div>
						<div className="py-2 px-3 bg-zinc-900 rounded-lg text-sm font-bold">
							Create New
						</div>
					</div>
					<div className="w-full bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg p-4 mb-6 showEvent relative">
						<div className="text-base font-bold mb-2 relative">
							Sara’s Birthday Bash
						</div>
						<div className="text-xs font-normal mb-4 relative">
							10 Days to go
						</div>
						<div className="flex justify-between w-2/5">
							<div>
								<div className="text-base font-bold mb-2">0</div>
								<div className="text-xs">Done</div>
							</div>
							<div>
								<div className="text-base font-bold mb-2">5</div>
								<div className="text-xs">To Do</div>
							</div>
						</div>
					</div>
				</>
			) : (
				<div className="w-full bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg p-4 mb-6 addEvent relative">
					<div className="text-base font-bold mb-2 relative">
						No Upcoming House Party
					</div>
					<div className="text-xs font-normal mb-4 relative">
						Plan your house party
					</div>
					<Button
						className="bg-blue-400 font-bold relative"
						size="sm"
						component={Link}
						href="/add"
					>
						CREATE A NEW EVENT
					</Button>
				</div>
			)}
			<section className="w-full">
				<header className="text-base font-bold mb-4">
					Previous House Parties
				</header>
				<div className="grid grid-cols-2 gap-4">
					<div className="w-full bg-zinc-900 rounded-lg p-2">
						<i className="block w-8 h-8 bg-neutral-800 rounded-full border border-[#D797FF] mb-2 p-1">
							<CakeIcon fill="#D797FF" />
						</i>
						<div className="text-white text-sm font-bold mb-2">
							Shravya’s Birthday
						</div>
						<time className="block text-sm text-zinc-400 mb-2">14-07-2021</time>
						<time className="block text-sm text-zinc-400 ">8:00 PM</time>
					</div>
					<div className="w-full bg-zinc-900 rounded-lg p-2">
						<i className="block w-8 h-8 bg-neutral-800 rounded-full border border-[#FF9A97] mb-2 p-1">
							<HeartIcon fill="#FF9A97" />
						</i>
						<div className="text-white text-sm font-bold mb-2">
							N&T’s Anniversary
						</div>
						<time className="block text-sm text-zinc-400 mb-2">14-07-2021</time>
						<time className="block text-sm text-zinc-400 ">8:00 PM</time>
					</div>
					{events.length > 0 &&
						events.map((item) => (
							<div
								key={`event_${item.id}`}
								className="w-full bg-zinc-900 rounded-lg p-2"
							>
								<i className="block w-8 h-8 bg-neutral-800 rounded-full border border-[#FF9A97] mb-2 p-1">
									<HeartIcon fill="#FF9A97" />
								</i>
								<div className="text-white text-sm font-bold mb-2">
									{item.name}
								</div>
								<time className="block text-sm text-zinc-400 mb-2">
									{item.date}
								</time>
								<time className="block text-sm text-zinc-400 ">
									{item.time}
								</time>
							</div>
						))}
				</div>
			</section>
		</>
	);
}
