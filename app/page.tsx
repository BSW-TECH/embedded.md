"use client"
import React from "react"
import Hero from "@/components/Hero"
import Card from "@/components/Card"
import Image from "next/image"
import back from "../public/hero-bg.png"

const Home = () => {
  return (
    <div className="relative w-full flex flex-center flex-col bg-gray-950">
      <div className="absolute inset-0">
        <Image
          src={back}
          layout="fill"
          sizes="100vw"
          objectFit="cover"
          alt="Cosmos">

        </Image>
      </div>

      <div className="flex flex-col items-center relative flex-wrap">
        <Hero />
        <Card />
      </div>

      <div className="w-full h-[800px]" /> Temporary transparent box for enabling scroll
    </div>
  )
}

export default Home