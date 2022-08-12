import Image from "next/image";
import React, { forwardRef } from "react";
import { ThumbUpIcon } from "@heroicons/react/outline";

const Thumbnail = forwardRef(({ result }, ref) => {
	const BASE_URL = "http://image.tmdb.org/t/p/original/"
	return (
		<div
			ref={ref}
			className="p-2 group cursor-pointer transition duration-100 ease-in transform sm:hover:scale-105 hover:z-50"
		>
			<Image
				layout="responsive"
				src={
					`${BASE_URL}${result.backdrop_path || result.poster_path}` ||
					`${BASE_URL}${result.poster_path}`
				}
				height={1080}
				width={1920}
				alt="image"
			/>
			<div className="p-2">
				<p className="truncate max-w-md">{result.overview}</p>
				<h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
					{result.title || result.original_name}
				</h2>
				<p className="flex items-center opacity-0 group-hover:opacity-100">
					{result.release_date || result.first_air_date}
					<span className="pl-4 flex items-center">
						<ThumbUpIcon className="h-5 mx-2" />
						{result.vote_count}
					</span>
				</p>
			</div>
		</div>
	);
});

export default Thumbnail;
