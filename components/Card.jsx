import noisy from '/public/assets/img/noisy-img.png'
import Image from 'next/image'
import curlyImg from '/public/assets/img/curly-bracers.svg'
import { Inter, Share_Tech_Mono } from 'next/font/google'
import Link from 'next/link'
const share_tech_mono = Share_Tech_Mono({
  subsets:['latin'],
  weight:['400'],
})

const Card = () => {
  return (
    <div>
    <div className=" mt-10 text-base font-normal  ">
      <div className=" text-white px-10">
        <div className=" bg-local rounded-xl mr-auto max-w-7xl ml-auto w-full from-white to-red-500 
             bg-[url('/assets/img/noisy-img.png')]">
          <div className="pt-0 pb-24 leading-6">
            <div className="grid auto-cols-fr grid-cols-5 gap-y-6 gap-x-6">
              <div className="row-span-1 col-span-5">
                <div className="px-16 py-16">
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
                 <div className='p-6'></div>
                 <h2 className='font-normal text-3xl'>
                    <div className={share_tech_mono.className}>
                      Sharpen your coding  skills
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
                      Join the Dojo
                    </Link>
                  </div>
                </div>

                <div>
                  adsad
                </div>
                

              </div>

            </div>
          </div>
        </div>
        
      </div>
    </div>
    </div>
  )
}

export default Card