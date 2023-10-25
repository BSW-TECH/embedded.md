import React from 'react'
import noisy from '/public/assets/img/noisy-img.png'
import Image from 'next/image'
import curlyImg from '/public/assets/img/curly-bracers.svg'
import { Inter, Share_Tech_Mono } from 'next/font/google'
import Link from 'next/link'
import board from '../public/board.png'
import board2 from '../public/board2.png'

const share_tech_mono = Share_Tech_Mono({
  subsets: ['latin'],
  weight: ['400'],
})

const Card = () => {
  return (
    <div className="flex mt-10 text-white rounded-xl max-w-7xl w-full from-white to-black 
    bg-[url('/noisy-img.png')] pb-12 overflow-hidden">
      <div className='px-16 py-16'>
        <div className="bg-gray-400 rounded-lg inline-block  px-4 py-4">
          <div className='flex justify-center myPulse'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="redblack" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
            </svg>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row justify-between'>
          <div>
            <h2 className='font-normal text-base sm:text-4xl pt-6 text-orange-500'>
              <div className={share_tech_mono.className}>
                <span>Sharpen your coding  skills</span>
              </div>
            </h2>
            <div className='p-2'></div>
            <span className={share_tech_mono.className}>
              <div className='text-base sm:text-2xl'>
                <span>Time to learn real &quot;MZFK&quot; engineering. Embedded community is the place to put motions in your code and projects. Here you will learn Embedded C Coding techniques, Digital Electronics and Robotics. Also here you will meet other talents that will share their projects and code you can interact with.</span>
              </div>
            </span>
            <div className='p-4'></div>
            <div className={`${share_tech_mono.className} max-w-[180px]`}>
              <Link href="/blog" className='flex hover:bg-gray-700 text-base sm:text-xl text-center mt-4 font-normal border rounded-md  px-3 py-1.5 tracking-wider flex-nowrap'>
                <span>Stay tuned</span>
              </Link>
            </div>
          </div>
          <div>
            <div className='flex flex-col sm:flex-row sm:w-[620px] h-[430px] mt-3 sm:ml-[35%]'>
              <Image
                src={board2}
                alt='bsw board'
                className='rounded-3xl'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card