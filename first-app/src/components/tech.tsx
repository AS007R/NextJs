import Image from "next/image";

const Tech = () => {
  return (
    <div className="w-full max-w-[1300px] mx-auto  mb-28 mt-10">
      <div className="text-black w-full text-center">
        <h1 className="text-2xl sm:text-3xl font-bold py-4 pb-7">Our Tech Expertise</h1>
      </div>
      <div className=" flex flex-col gap-7">
        <div className="flex flex-col sm:flex-row w-full justify-center gap-4 ">
          <div className="w-full sm:w-1/5 h-16 flex justify-center">
            <Image
              src="/icon/html5.svg"
              width={91}
              height={0}
              alt="Picture of the author"
              className=" p-2 "
            />
          </div>
          <div className="w-full sm:w-1/5 h-16 flex justify-center">
            <Image
              src="/icon/tailwindcss-ar21.svg"
              width={120}
              height={80}
              alt="Picture of the author"
              className=" p-2 "
            />
          </div>
          <div className="w-full sm:w-1/5 h-16 flex justify-center">
            <Image
              src="/icon/bootstrap.svg"
              width={154}
              height={0}
              alt="Picture of the author"
              className=" p-2 "
            />
          </div>
          <div className="w-full sm:w-1/5 h-16 flex justify-center">
            <Image
              src="/icon/jquery.svg"
              width={141}
              height={0}
              alt="Picture of the author"
              className=" p-2 "
            />
          </div>
          <div className="w-full sm:w-1/5 h-16 flex justify-center">
            <Image
              src="/icon/react-js.svg"
              width={138}
              height={0}
              alt="Picture of the author"
              className=" p-2 "
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full justify-center gap-4">
          <div className="sm:w-1/5 h-16 flex justify-center">
            <Image
              src="/icon/angular-js.svg"
              width={163}
              height={0}
              alt="Picture of the author"
              className=" p-2 "
            />
          </div>
          <div className="sm:w-1/5 h-16 flex justify-center">
            <Image
              src="/icon/node-js.svg"
              width={103}
              height={0}
              alt="Picture of the author"
              className=" p-2 "
            />
          </div>
          <div className="sm:w-1/5 h-16 flex justify-center">
            <Image
              src="/icon/next-js.svg"
              width={240}
              height={0}
              alt="Picture of the author"
              className=" p-2 "
            />
          </div>
          <div className="sm:w-1/5 h-16 flex justify-center">
            <Image
              src="/icon/php.svg"
              width={100}
              height={0}
              alt="Picture of the author"
              className=" p-2 "
            />
          </div>
          <div className="sm:w-1/5 h-16 flex justify-center">
            <Image
              src="/icon/wordpress.svg"
              width={167}
              height={0}
              alt="Picture of the author"
              className=" p-2 "
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full justify-center gap-4">
          <div className="w-full sm:w-1/5 h-16 flex justify-center">
            <Image
              src="/icon/shopify.svg"
              width={154}
              height={0}
              alt="Picture of the author"
              className=" p-2 "
            />
          </div>
          <div className="w-full sm:w-1/5 h-16 flex justify-center">
            <Image
              src="/icon/amazon.svg"
              width={178}
              height={0}
              alt="Picture of the author"
              className=" p-2 "
            />
          </div>
          <div className="w-full sm:w-1/5 h-16 flex justify-center">
            <Image
              src="/icon/python.svg"
              width={171}
              height={0}
              alt="Picture of the author"
              className=" p-2 "
            />
          </div>
          <div className="w-full sm:w-1/5 h-16 flex justify-center">
            <Image
              src="/icon/mongodb.svg"
              width={174}
              height={0}
              alt="Picture of the author"
              className=" p-2 "
            />
          </div>
          <div className="w-full sm:w-1/5 h-16 flex justify-center">
            <Image
              src="/icon/mysql.svg"
              width={111}
              height={0}
              alt="Picture of the author"
              className=" p-2 "
            />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Tech;
