"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import React from "react";
import { ChevronRight } from "lucide-react";

import amer from "@/components/assets/logo.jpg";

import gfe from "@/components/assets/65621040113617.5772c1ee7e6eb.png";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <div className="flex align-middle justify-center">
      <div className="flex justify-between align-middle  rounded-lg w-10/12">
        <div className="flex h-18 w-auto">
          <Image
            alt="logo"
            src={amer}
            height={100}
            width={100}
            className="m-auto"
          />
          <Image
            alt="logo"
            src={gfe}
            height={100}
            width={100}
            className="m-auto"
          />
        </div>
        <NavigationMenu className="bg-transparent w-full">
          <NavigationMenuList className="bg-transparent">
            <NavigationMenuItem className="bg-transparent mr-2">
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className="mx-3 text-gray-500 text-lg hover:text-gray-800"
                  style={{
                    fontFamily: "__gilroyBold_3f9e24",
                  }}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem className="bg-transparent mr-2">
              <Link href="/gfe" legacyBehavior passHref>
                <NavigationMenuLink
                  className="mx-3 text-gray-500 text-lg hover:text-gray-800"
                  style={{
                    fontFamily: "__gilroyBold_3f9e24",
                  }}
                >
                  GFE
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem className="mr-2">
              <Link href="/aboutus" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${
                    pathname == "/aboutus"
                      ? " text-red-700 hover:text-gray-800"
                      : " text-gray-500 hover:text-gray-800"
                  } mx-3 text-lg`}
                  style={{
                    fontFamily: "__gilroyBold_3f9e24",
                  }}
                >
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem className="mr-3">
              <Link href="/services" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${
                    pathname == "/services"
                      ? " text-red-700 hover:text-gray-800"
                      : " text-gray-500 hover:text-gray-800"
                  } mx-3 text-lg`}
                  style={{
                    fontFamily: "__gilroyBold_3f9e24",
                  }}
                >
                  Services
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem className="mr-2">
              <Link href="/contactus" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${
                    pathname == "/contactus"
                      ? " text-red-700 hover:text-gray-800"
                      : " text-gray-500 hover:text-gray-800"
                  } mx-3 text-lg`}
                  style={{
                    fontWeight: 500,
                    fontFamily: "__gilroyBold_3f9e24",
                  }}
                >
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button
          className="bg-green-700 my-auto font-gilroy-bold relative hover:bg-greem-800 h-auto"
          variant="outline"
        >
          <span
            className="text-white"
            style={{ fontFamily: "__gilroyBold_3f9e24" }}
          >
            Apply Online
          </span>
          <ChevronRight
            className="text-slate-200 bg-transparent ml-2  right-1"
            style={{ fontWeight: 600 }}
            size={30}
          />
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
