import React from 'react'
import noisy from '/public/assets/img/noisy-img.png'
import Image from 'next/image'
import curlyImg from '/public/assets/img/curly-bracers.svg'
import { Inter, Share_Tech_Mono } from 'next/font/google'
import Link from 'next/link'
const share_tech_mono = Share_Tech_Mono({
  subsets: ['latin'],
  weight: ['400'],
})

const Card = () => {
  return (
    <div className="flex max-h-[600px] mt-10 text-base font-normal text-white px-10 bg-local rounded-xl mr-auto max-w-7xl ml-auto w-full from-white to-red-500 
    bg-[url('/assets/img/noisy-img.png')] pt-0 pb-12 leading-6 auto-cols-fr grid-cols-5 gap-y-6 gap-x-6 row-span-1 col-span-5 overflow-hidden">
      <div className='px-16 py-16'>
        <div className="bg-gray-700 rounded-lg inline-block  px-4 py-4">
          <div className='flex justify-center '>
            <Image className='myPulse'
              src={curlyImg}
              alt='Curly Bracers'
              width={30}
              height={26}>
            </Image>
          </div>
        </div>

        <div className='flex flex-row justify-between'>
          <div>
            <h2 className='font-normal text-3xl pt-6'>
              <div className={share_tech_mono.className}>
                <span>Sharpen your coding  skills</span>
              </div>
            </h2>
            <div className='p-2'></div>
            <span className={share_tech_mono.className}>
              <div className='text-lg'>
                <span>Challenge yourself on small coding exercises called &quot;kata&quot;. Each kata is crafted by the community to help you strengthen different coding techniques. Master your current language of choice, or quickly pick up any of the 55+ programming languages supported.</span>
              </div>
            </span>
            <div className='p-4'></div>
            <div className={share_tech_mono.className} >
              <Link href="/blog" className='hover:bg-gray-700 text-xl text-center mt-4 font-normal border rounded-md  px-3 py-1.5 tracking-wider'>
                <span>Join the Dojo</span>
              </Link>
            </div>
          </div>
          <div>
            <div className='w-[620px] h-[250px] ml-[35%] bg-red-600 border-8'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card