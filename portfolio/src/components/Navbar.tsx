// components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, handleMenu] = useState(false);
  const handleClick = () => {
    handleMenu(!menuOpen);
  };
  return (
    <>
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Asad Subhani</div>
          <nav className="hidden space-x-4 sm:flex">
            <Link href="#about" className="hover:text-gray-400">
              About
            </Link>
            <Link href="#projects" className="hover:text-gray-400">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-gray-400">
              Contact
            </Link>
          </nav>
          <nav className=" sm:hidden">
            <div onClick={handleClick} className="cursor-pointer">
              <AiOutlineMenu size={25} />
            </div>

            <div
              className={
                menuOpen
                  ? "fixed top-0 left-0 w-[65%] bg-gray-400 p-6 z-20 h-screen ease-in duration-500 sm:hidden"
                  : "fixed -left-[100%] top-0 ease-out duration-500 sm:hidden"
              }
            >
              <div className="flex w-full items-center justify-end">
                <div
                  onClick={handleClick}
                  className="cursor-pointer"
                >
                  <AiOutlineClose size={25} />
                </div>
              </div>
              <div className="flex flex-col items-center w-full py-10">
              <Link href="#about" className="hover:font-bold py-2">
              <div
                  onClick={handleClick}
                  className="cursor-pointer"
                >
                  <h1>About</h1>
                </div>
              </Link>
              <Link href="#projects" className="hover:font-bold py-2">
              <div
                  onClick={handleClick}
                  className="cursor-pointer"
                >
                  <h1>Projects</h1>
                </div>
              </Link>
              <Link href="#contact" className="hover:font-bold py-2">
              <div
                  onClick={handleClick}
                  className="cursor-pointer"
                >
                  <h1>Contact</h1>
                </div>
              </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
