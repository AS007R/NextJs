import Image from "next/image";
import React from "react";

import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineTwitter,
} from "react-icons/ai";

export default function card() {
  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen">
        <div className="bg-green-900 w-[700px] h-96 justify-center rounded-3xl flex">
          <div className=" h-full w-[200px]  relative">
            <div className="bg-white  w-full h-3 absolute bottom-32"></div>
            <div className="bg-white  w-12 h-12 absolute top-7 right-1"></div>

            <div className="absolute top-36 pl-3">
              <div>
                <div className="flex">
                  <AiOutlineMail className="flex self-center" />
                  <h1 className="font-bold pl-1">Email</h1>
                </div>
                <p className="text-sm">asad@asaddev.com</p>
              </div>
              <div className=" mt-1">
                <div className="flex">
                  <AiOutlinePhone className="flex self-center" />
                  <h1 className="font-bold pl-1">Phone</h1>
                </div>
                <p className="text-sm">+92 343 5701060</p>
              </div>
            </div>
            <div className=" pt-3 pl-3 absolute top-64">
              <p className="font-bold">Find me on</p>
              <div className="flex gap-5 pt-2">
                <AiOutlineGithub className="flex self-center" />
                <AiFillLinkedin className="flex self-center" />
                <AiOutlineTwitter className="flex self-center" />
              </div>
            </div>
            <Image
              src="/profile.png"
              width={230}
              height={400}
              alt="Picture of the Asad"
              className="border-black border-2 absolute z-10 -right-40 top-10"
            />
          </div>
          <div className="bg-white h-full w-[500px] rounded-r-3xl relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-[50%] bg-green-900  "></div>
            <div className="bg-green-900  w-12 h-12 absolute rounded-full bottom-[73px] left-[134px]"></div>

            <div className="w-[300px] h-[300px] pl-7 ml-40 my-14">
              <h1 className="font-bold text-2xl tracking-wider text-green-900">
                Asad
              </h1>
              <h1 className="font-bold text-2xl tracking-wider text-black">
                Subhani
              </h1>
              <h1 className="font-bold text-sm text-black mt-1">
                Front-end Developer | Lahore, Pakistan
              </h1>
              <p className="text-justify text-sm text-black mt-1">
                Versatile Front End Developer shaping digital landscapes with a
                blend of creativity and precision. Elevate your online presence
                through seamless, user-centric design and intuitive interfaces.
              </p>
              <h1 className="font-bold text-sm text-black mt-1">
                Working with technologies:
              </h1>
              <ul className="text-sm text-black mt-1 list-disc pl-4">
                <li>Tailwind CSS</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Next Js</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
