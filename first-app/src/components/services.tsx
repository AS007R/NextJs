import Image from "next/image";

const Services = () => {
  return (
    <div className="w-full h-auto bg-white py-5">
      <div className="px-[5vw] max-w-[1300px] mx-auto text-black">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold py-2">
            Services We Offer
          </h1>
          <p className="text-lg ">
            We work with businesses of all sizes in a wide range of industries
            and niches.
          </p>
        </div>
        <div className="flex flex-col sm:hidden md:flex md:flex-row gap-6 my-6">
          <div className="flex flex-col w-80 h-80 justify-around mx-auto items-center text-center border-gray-500 hover:border-black hover:shadow-[3px_3px_3px_3px_rgba(0,0,0,0.3)] border-[1px] hover:animate-move-up rounded-md p-5 0">
            <Image
              src="/webapp-icon.png"
              width={70}
              height={0}
              alt="Picture of the author"
              className="border-blue-700 border-2 p-2 rounded-full"
            />
            <h1 className="font-bold text-xl">Web Application</h1>
            <p className="text-lg">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradise
            </p>
          </div>
          <div className="flex flex-col w-80 h-80 justify-around mx-auto items-center text-center border-gray-500 hover:border-black hover:shadow-[3px_3px_3px_3px_rgba(0,0,0,0.3)] hover:animate-move-up border-[1px]  rounded-md p-5 0">
            <Image
              src="/graphics-icon.png"
              width={70}
              height={0}
              alt="Picture of the author"
              className="border-blue-700 border-2 p-2 rounded-full"
            />
            <h1 className="font-bold text-xl">Creative Design</h1>
            <p className="text-lg">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradise
            </p>
          </div>
          <div className="flex flex-col w-80 h-80 justify-around mx-auto items-center text-center border-gray-500 hover:border-black hover:shadow-[3px_3px_3px_3px_rgba(0,0,0,0.3)] hover:animate-move-up border-[1px]  rounded-md p-5 0">
            <Image
              src="/digital-marketing-icon.png"
              width={70}
              height={0}
              alt="Picture of the author"
              className="border-blue-700 border-2 p-2 rounded-full"
            />
            <h1 className="font-bold text-xl">Digital Marketing</h1>
            <p className="text-lg">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradise
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:hidden md:flex md:flex-row gap-6 my-6">
          <div className="flex flex-col w-80 h-80 justify-around mx-auto items-center text-center border-gray-500 hover:border-black hover:shadow-[3px_3px_3px_3px_rgba(0,0,0,0.3)] border-[1px] hover:animate-move-up rounded-md p-5 0">
            <Image
              src="/e-commerce-icon.png"
              width={70}
              height={0}
              alt="Picture of the author"
              className="border-blue-700 border-2 p-2 rounded-full"
            />
            <h1 className="font-bold text-xl">E-Commerce</h1>
            <p className="text-lg">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradise
            </p>
          </div>
          <div className="flex flex-col w-80 h-80 justify-around mx-auto items-center text-center border-gray-500 hover:border-black hover:shadow-[3px_3px_3px_3px_rgba(0,0,0,0.3)] border-[1px] hover:animate-move-up rounded-md p-5 0">
            <Image
              src="/web-monitoring-icon.png"
              width={70}
              height={0}
              alt="Picture of the author"
              className="border-blue-700 border-2 p-2 rounded-full"
            />
            <h1 className="font-bold text-xl">Monitoring & Support</h1>
            <p className="text-lg">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradise
            </p>
          </div>
          <div className="flex flex-col w-80 h-80 justify-around mx-auto items-center text-center border-gray-500 hover:border-black hover:shadow-[3px_3px_3px_3px_rgba(0,0,0,0.3)] border-[1px] hover:animate-move-up rounded-md p-5 0">
            <Image
              src="/content-writing-icon.png"
              width={70}
              height={0}
              alt="Picture of the author"
              className="border-blue-700 border-2 p-2 rounded-full"
            />
            <h1 className="font-bold text-xl">Content Writing</h1>
            <p className="text-lg">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradise
            </p>
          </div>
        </div>
        <div className="hidden sm:flex gap-6 my-6 md:hidden">
          <div className="flex flex-col w-80 h-80 justify-around mx-auto items-center text-center border-gray-500 hover:border-black hover:shadow-[3px_3px_3px_3px_rgba(0,0,0,0.3)] border-[1px] hover:animate-move-up rounded-md p-5 0">
            <Image
              src="/webapp-icon.png"
              width={70}
              height={0}
              alt="Picture of the author"
              className="border-blue-700 border-2 p-2 rounded-full"
            />
            <h1 className="font-bold text-xl">Web Application</h1>
            <p className="text-lg">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradise
            </p>
          </div>
          <div className="flex flex-col w-80 h-80 justify-around mx-auto items-center text-center border-gray-500 hover:border-black hover:shadow-[3px_3px_3px_3px_rgba(0,0,0,0.3)] hover:animate-move-up border-[1px]  rounded-md p-5 0">
            <Image
              src="/graphics-icon.png"
              width={70}
              height={0}
              alt="Picture of the author"
              className="border-blue-700 border-2 p-2 rounded-full"
            />
            <h1 className="font-bold text-xl">Creative Design</h1>
            <p className="text-lg">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradise
            </p>
          </div>
        </div>
        <div className="hidden sm:flex gap-6 my-6 md:hidden">
        <div className="flex flex-col w-80 h-80 justify-around mx-auto items-center text-center border-gray-500 hover:border-black hover:shadow-[3px_3px_3px_3px_rgba(0,0,0,0.3)] hover:animate-move-up border-[1px]  rounded-md p-5 0">
            <Image
              src="/digital-marketing-icon.png"
              width={70}
              height={0}
              alt="Picture of the author"
              className="border-blue-700 border-2 p-2 rounded-full"
            />
            <h1 className="font-bold text-xl">Digital Marketing</h1>
            <p className="text-lg">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradise
            </p>
          </div>
          <div className="flex flex-col w-80 h-80 justify-around mx-auto items-center text-center border-gray-500 hover:border-black hover:shadow-[3px_3px_3px_3px_rgba(0,0,0,0.3)] border-[1px] hover:animate-move-up rounded-md p-5 0">
            <Image
              src="/e-commerce-icon.png"
              width={70}
              height={0}
              alt="Picture of the author"
              className="border-blue-700 border-2 p-2 rounded-full"
            />
            <h1 className="font-bold text-xl">E-Commerce</h1>
            <p className="text-lg">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradise
            </p>
          </div>
        </div>
        <div className="hidden sm:flex gap-6 my-6 md:hidden">
        <div className="flex flex-col w-80 h-80 justify-around mx-auto items-center text-center border-gray-500 hover:border-black hover:shadow-[3px_3px_3px_3px_rgba(0,0,0,0.3)] border-[1px] hover:animate-move-up rounded-md p-5 0">
            <Image
              src="/web-monitoring-icon.png"
              width={70}
              height={0}
              alt="Picture of the author"
              className="border-blue-700 border-2 p-2 rounded-full"
            />
            <h1 className="font-bold text-xl">Monitoring & Support</h1>
            <p className="text-lg">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradise
            </p>
          </div>
          <div className="flex flex-col w-80 h-80 justify-around mx-auto items-center text-center border-gray-500 hover:border-black hover:shadow-[3px_3px_3px_3px_rgba(0,0,0,0.3)] border-[1px] hover:animate-move-up rounded-md p-5 0">
            <Image
              src="/content-writing-icon.png"
              width={70}
              height={0}
              alt="Picture of the author"
              className="border-blue-700 border-2 p-2 rounded-full"
            />
            <h1 className="font-bold text-xl">Content Writing</h1>
            <p className="text-lg">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradise
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
