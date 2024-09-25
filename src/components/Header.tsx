import React, { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";
import Drawer from "./Drawer";
import { FaChevronDown } from "react-icons/fa";
import useOnClickOutside from "../hooks/useClickOutside";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header({ hasHero }: { hasHero?: boolean }) {
  const { pathname, push } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown
  const menuRef = useRef<any>();
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  useOnClickOutside(menuRef, () => {
    setIsDropdownOpen(false)
  });


  return (
    <>
      <div
        className={clsx(
          "w-full md:border-b-[0.5px] h-[10vh] text-nowrap px-3 md:px-8 lg:px-[96px] flex items-center justify-between py-2 sm:mx-0",
          hasHero ? "bg-opacity-10 !text-white absolute" : "bg-white bg-opacity-80"
        )}
      >
        <div className="py-3  flex md:gap-12 items-center md:justify-between">
          <button
            onClick={toggleDrawer}
            className="md:pr-12 pr-3 pl-4 inline-block lg:hidden"
          >
            <RxHamburgerMenu size={30} />
          </button>
          <Link
            href="/"
            className="align-middle flex items-center justify-center gap-3 text-2xl font-bold text-[#03071e]"
          >
            <img className="h-10 md:!h-16 w-auto" alt="Ajosquad" src="/assets/logo.png" />
          </Link>

          <div className="lg:flex hidden items-center gap-6">
            <div className="flex items-center">
              <Link href="/" className="mx-6 font-sora font-medium">
                Home
              </Link>
              <Link href="/about" className="mx-6 font-sora font-medium">
                About Us
              </Link>

              {/* Products Dropdown */}
              <div ref={menuRef} onMouseEnter={() => setIsDropdownOpen(true)}
                // onMouseLeave={() => setIsDropdownOpen(false)} // Option for hover-based dropdown
                className="relative">
                <button

                  className="mx-6 flex items-center gap-2 font-sora font-medium"
                  onClick={toggleDropdown}
                // Option for hover-based dropdown
                // onMouseLeave={() => setIsDropdownOpen(false)} // Option for hover-based dropdown
                >
                  Products <FaChevronDown className="mt-1" />
                </button>
                {isDropdownOpen && (
                  <div
                    onMouseEnter={() => setIsDropdownOpen(true)} // Keep open when hovering over the dropdown
                    onMouseLeave={() => setIsDropdownOpen(false)} // Close when leaving dropdown
                    className="absolute left-0 mt-2 w-[130px] divide-y bg-white shadow-lg rounded-lg"
                  >
                    <Link
                      href="/products/ajosquad"
                      className="block px-4 py-2 text-black rounded-t-lg hover:bg-gray-100"
                    >
                      AjoSquad
                    </Link>
                    <Link
                      href="/products/ajo-homes"
                      className="block px-4 py-2 text-black rounded-b-lg hover:bg-gray-100"
                    >
                      AjoHomes
                    </Link>
                  </div>
                )}
              </div>

              <Link href="#" className="mx-6 font-sora font-medium">
                Blog
              </Link>
              <Link href="#" className="mx-6 font-sora font-medium">
                Gallery
              </Link>
              <Link href="#" className="mx-6 font-sora font-medium">
                Help
              </Link>
            </div>
          </div>
        </div>

        <div className="flex md:gap-6 gap-2  items-center">
          <Link
            className={clsx(
              "border rounded-lg px-4 py-2",
              hasHero ? "border-white" : "border-primary text-primary"
            )}
            href=""
          >
            Login
          </Link>
          <Link
            className="border text-white rounded-lg bg-primary hover:bg-primary-hover px-4 py-2"
            href=""
          >
            Sign Up
          </Link>
        </div>


        <Drawer hasHero={hasHero ?? false} isOpen={isOpen} setIsOpen={toggleDrawer} />
      </div>
    </>
  );
}
