/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Drawer from "./Drawer";
import Image from "next/image";
import clsx from "clsx";

export default function Header({ hasHero }: { hasHero?: boolean }) {

  const { pathname, push } = useRouter();
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }


  return (
    <>
      <div className={
        clsx("w-full md:border-b h-[10vh]  text-nowrap px-3 md:px-8 lg:px-[96px]  flex items-center justify-between py-2  sm:mx-0 ",
          hasHero ? "bg-opacity-10  !text-white absolute" : "bg-white bg-opacity-80"
        )
      }>
        <div className=" py-3 flex gap-12 items-center justify-between ">
          <Link
            href="/"
            className="align-middle flex items-center justify-center gap-3 text-2xl font-bold text-[#03071e]"
          >
            <img className="h-10 md:!h-16 w-auto" alt="Ajosquad" src="/assets/logo.png" />
          </Link>

          <div className="lg:flex hidden items-center gap-6">
            <div className="flex items-center">
              <Link href={"/"} className=" mx-6 font-sora font-medium" >Home</Link>
              <Link href={"/about"} className=" mx-6 font-sora font-medium" >About Us</Link>
              <Link href={"#"} className=" mx-6 font-sora font-medium" >Products</Link>
              <Link href={"#"} className=" mx-6 font-sora font-medium" >Blog</Link>
              <Link href={"#"} className=" mx-6 font-sora font-medium" >Gallery</Link>
              <Link href={"#"} className=" mx-6 font-sora font-medium" >Help</Link>
            </div>




          </div>
        </div>


        <div className="lg:flex gap-6 hidden items-center">
          <Link className={
            clsx(
              "border  rounded-lg px-4 py-2",
              hasHero ? "border-white" : "border-primary text-primary"
            )
          } href={""}>Login</Link>
          <Link className="border rounded-lg bg-primary hover:bg-primary-hover px-4 py-2" href={""}>Sign Up</Link>
        </div>
        <button onClick={toggleDrawer} className="md:pr-12  pr-3 pl-4 inline-block lg:hidden">
          <svg
            className="mr-auto  text-[#03071e]"
            width="33"
            height="50"
            viewBox="0 0 23 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.892578 10.8691H22.1058"
              stroke="#03071e"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
            <path
              d="M0.892578 18.8691H22.1058"
              stroke="#03071e"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
            <path
              d="M22.1066 14.8688H0.893399"
              stroke="#03071e"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <Drawer isOpen={isOpen} setIsOpen={toggleDrawer} />
      </div>
    </>
  );
}
