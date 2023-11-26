"use client";
import { IoIosClose, IoMdMenu } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <div className="w-full max-w-[1300px] m-auto relative">
      <div>
        {!open ? (
          <div
            onClick={handleClick}
            className="bg-gray-600 px-1 flex absolute z-20 right-5 top-5 cursor-pointer text-white"
          >
            <IoMdMenu size={25} />
            <h1 className=" pt-[1px] ">MENU</h1>
          </div>
        ) : (
          <IoIosClose
            size={35}
            onClick={handleClick}
            className=" absolute z-20 right-10 top-4 cursor-pointer text-white"
          />
        )}
      </div>
      <div
        className={`${
          !open ? "-translate-x-[150%]" : ""
        } absolute top-0 w-full bg-black/90 border-r-[1px] border-gray-200 z-10 h-screen md:duration-1000 duration-700 ease-in  `}
      >
        <ul className=" flex flex-col gap-7 text-white font-bold tracking-wider text-3xl justify-center w-full h-full items-center">
          <li onClick={handleClick}>
            <Link href="/">About Us</Link>
          </li>
          <li onClick={handleClick}>
            <Link href="/">Services</Link>
          </li>
          <li onClick={handleClick}>
            <Link href="/">Tech Stack</Link>
          </li>
          <li onClick={handleClick}>
            <Link href="/">Clients</Link>
          </li>
          <li onClick={handleClick}>
            <Link href="/">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
