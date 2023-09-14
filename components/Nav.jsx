import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"

// nav data, for code optimisation in future
export const navData = [
    {name: 'blog', path: '/blog'},
    {name: 'educators', path: '/educators'},
    {name: 'companies', path: '/companies'},
]

const Nav = () => {
  return (
    <nav className="flex w-full  ">
        <div className="flex justify-between items-center h-full w-full px-10 bg-black text-xl ">
            <div className=" flex flex-row pt-3 pb-3 ">
                <Link href="/" className="">
                    {/* <Image
                    src={"https://uploads-ssl.webflow.com/62e3ee10882dc50bcae8d07a/64c17e87883a17f4153b301f_codewars-by-andela-dark.svg"}
                    width={205}
                    height={100}> 
                    </Image> */}
                    <div className="w-[205px] h-[100px] bg-white"/>
                </Link>
                <ul className=" flex self-center">
                    <Link href="/blog" className="flex gap-2 mr-4 ml-6 text-white hover:text-red-500">
                        <li>Blog</li> 
                    </Link>
                    <Link href="/educators" className="flex gap-2 mr-4 text-white hover:text-red-500">
                        <li>Educators</li> 
                    </Link>
                    <Link href="/companies" className="flex gap-2 mr-4 text-white hover:text-red-500">
                        <li>Companies</li> 
                    </Link>
                </ul>
               
            </div>


            <div className="flex ">
                <ul className="flex">
                    <Link href="/blog" className=" white_btn gap-2 mr-4">
                        <li>Log In</li> 
                    </Link>

                    <Link href="/blog" className="red_btn gap-2 mr-4">
                        <li>Join</li> 
                    </Link>
                </ul>
                
            </div>
        </div>

        <hr className="h-px dark:bg-gray-700"></hr>
    </nav>
  )
  
}

export default Nav