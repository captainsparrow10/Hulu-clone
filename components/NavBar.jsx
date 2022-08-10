import {useRouter} from "next/router"
import React from "react";
import requests from "../utils/requests";

export default function NavBar() {
  const router = useRouter()
	return (
		<nav className="relative">
			<div className="div-navbar">
				{Object.entries(requests).map(([key, { title, url }]) => (
					<h2
						key={title}
            onClick={() => router.push(`/?genre=${key}`)}
						className="title-navbar"
					>
						{title}
					</h2>
				))}
			</div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
		</nav>
	);
}
