import Hero from "@/components/Hero"
import Card from "@/components/Card"
import Image from "next/image"
import pythonLogo from '/public/assets/img/python-logo-sm.svg'


const Home = () => {
  return (
    <div className=" w-full flex-center flex-col bg-gradient-to-r from-black to-red-300">

      {/* <div className="grid gap-x-0 gap-y-0 grid-rows-6 gird-cols-6 grid-auto-columns items-center justify-center absolute inset-auto overflow-hidden transform-none">
        <div className=" transform hover:-translate-x-full transition duration-300 row-span-1 col-span-1 ">

        </div>
      </div> */}
      {/* <Image
      src={pythonLogo}
      alt="pythonLogo"
      >

      </Image> */}
      <Hero/>
      <Card/>
    </div>
  )
}

export default Home