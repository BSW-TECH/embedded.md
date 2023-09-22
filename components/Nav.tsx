"use client"
import React, {useState } from "react";

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Checkbox, Input} from "@nextui-org/react";
import {MailIcon} from "@/components/nexUiSvgs/MailIcon"
import {LockIcon} from "@/components/nexUiSvgs/LockIcon"


export default function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const menuItems = [
    "Blog",
    "Wiki",
    "Github",
    "Projects",
    "Products"
  ];

  const userConnectItems = [
    "Log In",
    "Join",
  ];

    const lower = (item : string) => {
      const itemLower = item.toLowerCase()

      return (
        <span>{itemLower}</span>
      )
    }

  return (
    
    <Navbar shouldHideOnScroll  className="bg-white dark:bg-black ">

    
      <NavbarContent className="flex" justify="center">
        <NavbarBrand>
          <Link href={"/"} className="">
        <svg xmlns="http://www.w3.org/2000/svg" width={50} height={84} style={{ "fillRule": 'evenodd', "clipRule": 'evenodd', "strokeLinejoin": 'round', "strokeMiterlimit": 2 }} viewBox="0 0 12500 20834">
  <text x="993.864" y="16948.8" style={{ "fontFamily": "Arial-BoldMT, Arial, sans-serif", "fontWeight": 700, "fontSize": 1837.81, "fill": "#7d25ff" }}
    transform="matrix(1 0 0 .92192 0 -9.628)">BSW</text>
  <text x="6514.66" y="16759.6" style={{ "fontFamily": "'Avenir-Light', 'Avenir', sans-serif", "fontWeight": 300, "fontSize": 1899.89, "fill": "#c622d6" }}
    transform="matrix(1 0 0 .91492 0 262.3)">TECH</text>
  <path d="M4618.9 8485.59c7.489-13.631-11.755 47.45-17.961 57.569-27.497 44.834-56.923 107.138-85.958 152.296-75.698 117.731-103.228 263.875-191.611 373.411-239.64 296.994-197.542 811.923-148.283 1035.66 21.119 95.918 39.142 305.926 66.066 400.973 46.946 165.724 4.332 177.385 65.173 338.368 38.779 102.609 435.399 914.186 435.399 914.186s197.099 413.705 365.395 603.496c48.597 54.804 118.452 112.809 236.339 180.184 92.059 52.615 201.989 95.85 310.616 109.318 2.944.365 1329.55-1.619 1329.55-1.619s-2334.95-4120.47-2366.9-4189.64"
    style={{ "fill": "url(#a)" }} />
  <path d="m5056.58 6330.43 756.783.117c-13.873 28.522-1323.05 2296.99-1509.95 2952.74-148.185 519.919-111.785 1106.16 107.702 1618.29 102.753 239.757 330.608 856.494 330.608 856.494l-1106.54-1933.84s-52.351-899.869-5.604-1203.73c102.276-664.795 462.549-1217.59 836.763-1761.9 155.949-226.835 233.678-341.733 458.424-491.563 11.943-7.962 56.772-33.878 127.912-36.164 1.243-.039 3.894-.456 3.894-.456"
    style={{ "fill": "url(#b)" }} />
  <path d="M5056.66 6330.46s-646.921-5.264-713.925 2.524c-83.096 9.659-156.927 11.121-279.718 97.794-109.945 77.605-151.282 171.507-203.837 270.26-37.531 70.523-764.969 1416.72-805.626 1490.4-52.863 95.795-56.607 210.669-60.847 305.623-3.723 83.383 56.549 315.536 127.231 439.667 59.154 103.886 202.335 351.5 202.335 351.5l385.671 663.31s-135.129-593.118-11.4-977.238c196.743-610.789 1360.12-2643.84 1360.12-2643.84"
    style={{ "fill": "url(#c)" }} />
  <path d="M7658.06 8047.07c-7.426 13.665 11.533-47.505 17.691-57.652 27.288-44.963 56.422-107.403 85.245-152.696 75.147-118.084 101.994-264.355 189.864-374.303 238.249-298.111 193.745-812.838 143.44-1036.34-21.567-95.818-40.571-305.74-67.94-400.659-47.72-165.504-5.16-177.363-66.753-338.06-39.259-102.427-439.668-912.141-439.668-912.141s-199.031-412.78-368.212-601.781c-48.853-54.577-118.978-112.255-237.178-179.078-92.305-52.184-202.435-94.904-311.125-107.865-2.945-.351-1329.53 7.835-1329.53 7.835s2354.19 4109.51 2386.46 4178.53"
    style={{ "fill": "url(#d)" }} />
  <path d="m7230.45 10204.3-756.775 3.421c13.739-28.586 1312.3-2303.15 1496.13-2959.77 145.753-520.606 106.613-1106.67-115.266-1617.77-103.872-239.274-334.608-854.939-334.608-854.939l1115.56 1928.65s56.557 899.614 11.23 1203.69c-99.167 665.266-456.852 1219.73-828.517 1765.79-154.887 227.562-232.079 342.821-456.121 493.701-11.907 8.018-56.614 34.143-127.743 36.761-1.242.046-3.891.474-3.891.474"
    style={{ "fill": "url(#e)" }} />
  <path d="M7230.38 10204.2s-646.939 2.24-713.906-5.862c83.05-10.047 156.873-11.854 279.258-99.1 109.581-78.118 150.479-172.212 202.571-271.21 37.201-70.698 758.338-1420.28 798.651-1494.15 52.414-96.04 55.621-210.931 59.417-305.903 3.334-83.4-58.023-315.269-129.284-439.068-59.639-103.608-203.976-350.55-203.976-350.55l-388.768-661.5s137.901 592.479 15.968 977.173c-193.885 611.703-1347.74 2650.17-1347.74 2650.17"
    style={{ "fill": "url(#f)" }} />
  <defs>
    <linearGradient id="a" x1="0" x2="1" y1="0" y2="0" gradientTransform="scale(4373.5) rotate(62.133 -1.206 1.785)" gradientUnits="userSpaceOnUse">
      <stop offset="0" style={{ "stopColor": "#430058", "stopOpacity": 1 }} />
      <stop offset="1" style={{ "stopColor": "#e93ecb", "stopOpacity": 1 }} />
    </linearGradient>
    <linearGradient id="c" x1="0" x2="1" y1="0" y2="0" gradientTransform="scale(3180.12) rotate(-62.917 2.87 .605)" gradientUnits="userSpaceOnUse">
      <stop offset="0" style={{ "stopColor": "#c119b6", "stopOpacity": 1 }} />
      <stop offset="1" style={{ "stopColor": "#a50b9c", "stopOpacity": 1 }} />
    </linearGradient>
    <linearGradient id="d" x1="0" x2="1" y1="0" y2="0" gradientTransform="scale(-4373.5) rotate(61.865 .536 -2.443)" gradientUnits="userSpaceOnUse">
      <stop offset="0" style={{ "stopColor": "#3e017a", "stopOpacity": 1 }} />
      <stop offset="1" style={{ "stopColor": "#8f00ff", "stopOpacity": 1 }} />
    </linearGradient>
    <linearGradient id="f" x1="0" x2="1" y1="0" y2="0" gradientTransform="scale(-3180.12) rotate(-63.185 -3.298 1.15)" gradientUnits="userSpaceOnUse">
      <stop offset="0" style={{ "stopColor": "#b02bfd", "stopOpacity": 1 }} />
      <stop offset="1" style={{ "stopColor": "#af34f8", "stopOpacity": 1 }} />
    </linearGradient>
    <radialGradient id="b" cx="0" cy="0" r="1" gradientTransform="scale(3639.304) rotate(77.291 -.583 1.527)" gradientUnits="userSpaceOnUse">
      <stop offset="0" style={{ "stopColor": "#b111a7", "stopOpacity": 1 }} />
      <stop offset="1" style={{ "stopColor": "#db2dd1", "stopOpacity": 1 }} />
    </radialGradient>
    <radialGradient id="e" cx="0" cy="0" r="1" gradientTransform="rotate(-102.977 8288.31 1673.393) scale(3639.305)" gradientUnits="userSpaceOnUse">
      <stop offset="0" style={{ "stopColor": "#c134fd", "stopOpacity": 1 }} />
      <stop offset="1" style={{ "stopColor": "#d025ff", "stopOpacity": 1 }} />
    </radialGradient>
  </defs>
</svg>
</Link>

        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>

        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="/blog" className="hover:text-red-500 text-xl">
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link  color="foreground" href="/educators" className="hover:text-red-500 text-xl">
            Wiki
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/companies" className="hover:text-red-500 text-xl">
            Github
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/companies" className="hover:text-red-500 text-xl">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/companies" className="hover:text-red-500 text-xl">
            Products
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="flex flex-row gap-4">
          <Button onPress={onOpen} color="warning" variant="flat" className="hidden sm:flex">Log In</Button>
            <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                />
                <Input
                  endContent={
                    <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link className="dark:text-white" color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Button onPress={onOpen} color="warning" className="hidden sm:flex">Join</Button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                />
                <Input
                  endContent={
                    <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="foreground" href="#" size="sm">
                    <span className="text-white">Forgot password?</span>
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="end">
            <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"} 
            className="dark:text-white w-[70px]" />

      </NavbarContent> 
      <NavbarMenu>

        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color="foreground"
              href={item.toLowerCase()}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        
        {userConnectItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              href="#"
              size="lg"
            >
            {/* <Button className="mt-1 w-screen border border-black dark:border-white bg-inherit hover:opacity-75"> */}
            <Button as={Link} className="mt-1 w-screen border border-black dark:border-white bg-inherit " color="warning" href="#" variant="flat">
              {item}
            </Button>
            </Link>

            

            
          </NavbarMenuItem>
        ))}


      </NavbarMenu>
    </Navbar>
    
  );
}
