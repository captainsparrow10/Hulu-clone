import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function index({request}) {
	return (
		<div>
			<Head>
				<title> Hulu </title>
				<link rel="icon" href="/Hulu.ico" />
			</Head>
			{/* Header */}
			<Header />
			{/* Navbar */}
			<NavBar />
			{/* Results */}
			<Results results={request["results"]} />
		</div>
	);
}

export async function getServerSideProps(context) {
	const genre = context.query.genre;
	const request = await fetch(
		`https://api.themoviedb.org/3${
			requests[genre]?.url || requests.fetchTrending.url
		}`
	).then((res) => res.json());
	return {
		props: {
			request,
		},
	};
}
