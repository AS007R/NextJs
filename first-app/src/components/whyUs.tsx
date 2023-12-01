import React from "react";
import Image from "next/image";

const WhyUs = () => {
  return (
    <div className='p-4 h-auto w-full bg-[url("/bg/bg-contact.webp")] bg-center bg-cover'>
      <div className="max-w-[1300px] w-full h-full flex flex-col md:gap-4 md:flex-row m-auto text-white">
        <div className=" flex flex-col gap-5 py-4 my-auto md:w-1/2 text-white ">
          <h1 className="text-lg tracking-wider font-bold">
            WHY CLIENTS CHOOSE US
          </h1>
          <h1 className="font-bold text-4xl">Why us?</h1>
          <p className=" text-xl tracking-wide ">
            We believe in providing our customers with the best quality, and
            that's something we never compromise on!
          </p>
          <p className=" text-xl tracking-wide ">
            We promise top-notch service from the moment you reach out to us.
            Your satisfaction is our priority every step of the way.
          </p>
          <p className=" text-xl tracking-wide ">
            Even after delivery, our support team ensures your satisfaction and
            addresses any concerns or needs you have promptly and effectively.
          </p>
        </div>
        <div className=" mt-2 flex flex-col sm:flex-row md:w-1/2 gap-4  w-full ">
          <div className=" w-full flex flex-col gap-4">
            <div className="w-80 mx-auto h-40 flex flex-col justify-center gap-2 rounded-3xl items-center bg-white text-black">
              <Image
                src="/e-commerce-icon.png"
                width={70}
                height={0}
                alt="Picture of the author"
                className="border-blue-700 border-2 p-2 rounded-xl"
              />
              <h1 className="font-bold text-xl">Dedicated teams!</h1>
            </div>
            <div className="w-80 mx-auto h-40 flex flex-col justify-center gap-2 rounded-3xl items-center bg-white text-black">
              <Image
                src="/e-commerce-icon.png"
                width={70}
                height={0}
                alt="Picture of the author"
                className="border-blue-700 border-2 p-2 rounded-xl"
              />
              <h1 className="font-bold text-xl">Dedicated teams!</h1>
            </div>
            <div className="w-80 mx-auto h-40 flex flex-col justify-center gap-2 rounded-3xl items-center bg-white text-black">
              <Image
                src="/e-commerce-icon.png"
                width={70}
                height={0}
                alt="Picture of the author"
                className="border-blue-700 border-2 p-2 rounded-xl"
              />
              <h1 className="font-bold text-xl">Dedicated teams!</h1>
            </div>
          </div>
          <div className=" w-full flex flex-col gap-4">
            <div className="w-80 mx-auto h-40 flex flex-col justify-center gap-2 rounded-3xl items-center bg-white text-black">
              <Image
                src="/e-commerce-icon.png"
                width={70}
                height={0}
                alt="Picture of the author"
                className="border-blue-700 border-2 p-2 rounded-xl"
              />
              <h1 className="font-bold text-xl">Dedicated teams!</h1>
            </div>
            <div className="w-80 mx-auto h-40 flex flex-col justify-center gap-2 rounded-3xl items-center bg-white text-black">
              <Image
                src="/e-commerce-icon.png"
                width={70}
                height={0}
                alt="Picture of the author"
                className="border-blue-700 border-2 p-2 rounded-xl"
              />
              <h1 className="font-bold text-xl">Dedicated teams!</h1>
            </div>
            <div className="w-80 mx-auto h-40 flex flex-col justify-center gap-2 rounded-3xl items-center bg-white text-black">
              <Image
                src="/e-commerce-icon.png"
                width={70}
                height={0}
                alt="Picture of the author"
                className="border-blue-700 border-2 p-2 rounded-xl"
              />
              <h1 className="font-bold text-xl">Dedicated teams!</h1>
            </div>
          </div>
          <div className="h-4 "></div>
        </div>
      </div>
      
    </div>
  );
};

export default WhyUs;
