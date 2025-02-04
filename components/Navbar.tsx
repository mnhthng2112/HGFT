"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Navigation items array
  const navItems = [
    { name: "triển lãm", href: "/" },
    { name: "hợp tác", href: "/about" },
    { name: "dịch vụ", href: "/news" },
    { name: "thông tin", href: "/contact" },
  ];

  return (
    <nav className="block w-[full] max-w-[1920px] px-4 mt-[-84px] mx-auto sticky top-0 shadow lg:px-8 bg-white z-[9999]">
      <div className="flex flex-wrap items-center justify-between mx-auto 2xl:py-0 py-2">
        <div className="flex items-center 2xl:gap-10 gap-6">
          <Link
            href="/"
            className="block cursor-pointer"
          >
            <Image
              src="/images/logo.png"
              className="2xl:w-[95px] md:w-[80px] w-[50px] aspect-[95/55]"
              alt="Next.js logo"
              width={95}
              height={55}
              priority
            />
          </Link>
          <div className="hidden lg:block">
            <ul className="flex flex-col gap-0 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center xl:gap-6 uppercase">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center 2xl:px-4 2xl:py-7 px-3 py-6 text-slate-800 hover:bg-[#fe1b43] cursor-pointer hover:text-white duration-300"
                  >
                    <Link href={item.href} className="block text-center xl:w-[106px]">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
          </div>
        </div>

        <div className="lg:hidden">
          <button
            className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            onClick={toggleMobileMenu}
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 min-h-screen w-100 bg-slate-100 shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden z-50`}
        >
          <div className="relative flex flex-row items-center border-b p-2">
            <Link
              href="/"
              className="cursor-pointer"
            >
              <Image
              src="/images/logo.png"
              className="2xl:w-[95px] md:w-[80px] w-[50px] aspect-[95/55]"
              alt="Next.js logo"
              width={95}
              height={55}
              priority
              />
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="block absolute top-1/2 -translate-y-1/2 right-2 pt-2 text-slate-600 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col h-full gap-4 p-4">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center p-1 text-lg gap-x-2 text-slate-600 hover:text-red-500"
              >
                <Link href={item.href} className="flex items-center">
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="mt-4">
              <button className="uppercase w-full bg-[#fe1b43] text-white 2xl:px-8 2xl:py-2.5 px-6 py-2 2xl:text-base text-sm border-b-4 border-[#b50625] mt-4">
                đăng ký tham dự
              </button>
              <button className="uppercase w-full bg-[#fe1b43] text-white 2xl:px-8 2xl:py-2.5 px-6 py-2 2xl:text-base text-sm border-b-4 border-[#b50625] mt-4 ">
                đăng ký thi đấu
              </button>
            </li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-7">
          <button className="uppercase bg-[#fe1b43] text-white 2xl:px-8 2xl:py-2.5 px-6 py-2 2xl:text-base text-sm border-b-4 border-[#b50625] font">
            đăng ký tham dự
          </button>
          <button className="uppercase bg-[#fe1b43] text-white 2xl:px-8 2xl:py-2.5 px-6 py-2 2xl:text-base text-sm border-b-4 border-[#b50625]">
            đăng ký thi đấu
          </button>
        </div>
      </div>
    </nav>
  );
}