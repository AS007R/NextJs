import Image from "next/image";

export default function Hero() {
  return (
    <div className="h-full w-full  bg-[url('/bg/Home-bg.webp')] bg-cover bg-center">
      <div className="bg-gray-950/50 bg-[150%] max-w-[1300px] text-white h-2/3 w-full px-[5vw] m-auto py-20 flex flex-col gap-4 sm:gap-5 text-center md:items-start md:text-start items-center ">
        <Image
          src="/esault-logo.png"
          width={140}
          height={0}
          alt="eSault Technologies"
          className="p-2 sm:w-[230px] bg-gray-50/40"
        />
        <h1 className="font-bold  text-3xl sm:text-5xl">
          Where Visions Become Visible: <br />
          <span>Unleashing Digital Potential.</span>
        </h1>
        <p className=" text-xl sm:text-3xl max-w-3xl">
          We are a creative team of developers, designers, strategists, and
          producers building elevated digital products.
        </p>
        <button className=" py-2 px-4 bg-gray-50/40 hover:bg-gray-400 rounded-full border-white border-[1px] text-xl sm:text-3xl ">Let's talk</button>
      </div>
    </div>
  );
}
