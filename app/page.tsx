"use client"
import React from "react"
import Hero from "@/components/Hero"
import Card from "@/components/Card"
import Image from "next/image"
import pythonLogo from '/public/assets/img/python-logo-sm.svg'

// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/react";
const Home = () => {
  return (
    <NextUIProvider>
    <div className="relative w-full flex flex-center flex-col bg-gray-950">
      <div className="absolute inset-0">
      <Image
      src="/assets/img/hero-bg.png"
      layout="fill"
      sizes="100vw"
      objectFit="cover"
      alt="Cosmos">

      </Image>
      </div>

      {/* <div className="grid gap-x-0 gap-y-0 grid-rows-6 gird-cols-6 grid-auto-columns items-center justify-center absolute inset-auto overflow-hidden transform-none">
        <div className=" transform hover:-translate-x-full transition duration-300 row-span-1 col-span-1 ">

        </div>
      </div> */}
      {/* <Image
      src={pythonLogo}
      alt="pythonLogo"
      >

      </Image> */}
      <div className="relative">
        <Hero />
        <Card />
      </div>

      <div className="w-full h-[800px]" /> Temporary transparent box for enabling scroll
    </div>
    </NextUIProvider>
  )
}

export default Home