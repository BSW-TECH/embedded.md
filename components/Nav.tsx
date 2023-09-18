"use client"
import React from "react";

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";


export default function App() {
  const menuItems = [
    "Blog",
    "Educators",
    "Companies",
  ];

  const userConnectItems = [
    "Log In",
    "Join",
  ];

  return (
    <Navbar disableAnimation isBordered className="bg-white dark:bg-black ">


      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>

        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="#" className="hover:text-red-500 text-xl">
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link  color="foreground" href="#" className="hover:text-red-500 text-xl">
            Educators
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="hover:text-red-500 text-xl">
            Companies
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="invisible sm:visible lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem className="flex flex-row gap-4">
          <Button as={Link} className="invisible sm:visible" color="warning" href="#" variant="flat">
          Log In
          </Button>
          <Button as={Link} className="invisible sm:visible" color="warning" href="#" variant="flat">
            Join
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle className="dark:text-white"/>
      </NavbarContent> 
      <NavbarMenu>

        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color="foreground"
              href="#"
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
