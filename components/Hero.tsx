import React from "react"
import Link from "next/link"
import { Inter, Share_Tech_Mono } from 'next/font/google'
import backgroundImg from '/public/assets/img/background-img.jpg'
import Image from "next/image"

const share_tech_mono = Share_Tech_Mono({
  subsets: ['latin'],
  weight: ['400'],
})

const Hero = () => {
  return (
    <div>
      <div className=" flex w-full text-center text-4xl sm:text-8xl font-light leading-tight text-white mt-80 sm:mt-96 flex-col">
        <h1 className={`${share_tech_mono.className}`}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-red-600  hover:drop-shadow-lg">Enter the embedded community </span>
          <br />
          <span>through challenge</span>
        </h1>
        <div className="pt-6"></div>

        <div className={`flex self-center ${share_tech_mono.className} max-w-[90%] text-base sm:text-2xl text-center flex-wrap`}>
          <span>Improve your development skills by training with your peers on code kata that continuously challenge and push your coding practice.</span>
        </div>

        <div className="p-6"></div>
        <div className="flex justify-center">
          <Link href="/blog" className={share_tech_mono.className}>
            <button className="p-6 leading-6 tracking-widest font-normal text-white text-center text-2xl rounded-xl bg-orange-400 bg-opacity-50 transition-transform hover:scale-125 transform duration-300">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero