import Link from "next/link"
import { Inter, Share_Tech_Mono } from 'next/font/google'
import backgroundImg from '/public/assets/img/background-img.jpg'
import Image from "next/image"

const share_tech_mono = Share_Tech_Mono({
  subsets:['latin'],
  weight:['400'],
})


const Hero = () => {
  return (
    <div>
    <div className=" w-full text-center text-8xl font-light leading-tight text-white mt-96 ">
      <h1 className={share_tech_mono.className}> 
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-red-600  hover:drop-shadow-lg">Achieve mastery </span>
        <br />
        through challenge 
      </h1>
      <div className="p-6"></div>
      <span className="text-2xl text-center">
        <div className={share_tech_mono.className}>
            Improve your development skills by training with your peers on code kata that continuously challenge and push your coding practice.
        </div>
        
      </span>
      <div className="p-6"></div>
      <div className="flex justify-center">
        <Link href="/blog" className={share_tech_mono.className}>
          <button className="p-6 leading-6 hover:scale-125 tracking-widest font-normal text-white text-center text-2xl rounded-xl bg-black">Get Started</button>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default Hero