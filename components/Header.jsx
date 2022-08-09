import React from "react";
import { HomeIcon } from "@heroicons/react/solid";
import Image from "next/image";
export default function Header() {
	return (
		<header className="flex justify-between p-4">
			<div>
				<HomeIcon className="h-6" />
			</div>
			<div>
				<Image
					className="bg-transparent"
					src={require("./hulu-logo-black-and-white.png")}
					alt="Hulu"
					width={200}
					height={100}
					layout="fixed"
				/>
			</div>
		</header>
	);
}
