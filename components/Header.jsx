import React from "react";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
	HomeIcon,
	LightningBoltIcon,
	UserIcon,
	SearchIcon,
	CollectionIcon,
	BadgeCheckIcon,
} from "@heroicons/react/solid";
export default function Header() {
	return (
		<header className="header">
			<div className="div-header-item">
				<HeaderItem title="home" Icon={HomeIcon} />
				<HeaderItem title="trending" Icon={LightningBoltIcon} />
				<HeaderItem title="verified" Icon={BadgeCheckIcon} />
				<HeaderItem title="collections" Icon={CollectionIcon} />
				<HeaderItem title="search" Icon={SearchIcon} />
				<HeaderItem title="account" Icon={UserIcon} />
			</div>
			<Image
				className="bg-transparent object-contain"
				src={require("./hulu.png")}
				alt="Hulu"
				width={100}
				height={50}
			/>
		</header>
	);
}
