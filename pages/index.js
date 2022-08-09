import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'

export default function index() {
  return (
    <div>
      <Head>
        <title> Hulu </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Navbar */}
      {/* Results */}
    </div>
  )
}
