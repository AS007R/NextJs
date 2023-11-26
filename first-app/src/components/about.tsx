import Image from "next/image";

export default function About() {
  return (
    <div className="text-black w-full bg-[url('/bg/bg-contact.webp')] bg-cover bg-center py-5">
      <div className="max-w-[1300px] w-full m-auto md:flex">
        <div className="md:w-2/5">
          <Image
            src="/about/about.jpg"
            width={360}
            height={0}
            alt="eSault Technologies"
            className="py-2 m-auto sm:w-[550px]"
          />
        </div>
        <div className=" md:w-3/5 md:m-auto md:pl-6 items-center text-center px-2 text-white">
          <div className="">
            <h1 className="text-2xl sm:text-3xl font-bold py-4">About Us</h1>

            <p className="text-lg py-2 ">
              We are a team of 40 web experts with over 6 years of experience in
              website building and marketing to help businesses grow online.
            </p>
            <p className="text-lg py-4">
              If you are looking for the best website design, development, and
              marketing services to grow your business online, we are here to
              help. We are a team of certified experts with tremendous
              experience in web design, development, and marketing who'll walk
              with you all through.
            </p>
          </div>
          <div className="1">
            <h1 className="text-2xl sm:text-3xl font-bold py-2">
              Our Core Values
            </h1>
            <ul className="text-start text-lg pl-8 list-disc sm:mx-20  w-full">
              <li>Committed to delivering the best</li>
              <li>Honest and transparent services</li>
              <li>We care for your business just like ours</li>
              <li>Keep learning and adapting to new technologies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
