import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <div className="w-1/3 my-5 mt-8 pb-16 p-10 bg-white text-black flex flex-col text-xsm">
        <Image className=' py-2'
        src="/ms-logo.svg"
        width={110}
        height={30}
        alt='ms-logo'
        />
        <h1 className=' text-xl py-2 '>Sign in</h1>
        <input className=' py-2 border-b border-1 border-black ' type="text" placeholder='Email address, phone number or skype'/>
        <span className='mt-6 text-xs'>No account? <span className="hover:text-gray-500 text-blue-500 hover:cursor-pointer hover:underline">Create one!</span></span>
        <span className=" hover:text-gray-500 text-blue-500 text-xs my-4 hover:cursor-pointer hover:underline">Can't access your account?</span>
        <div className="py-2 flex w-full relative">
          <button className="absolute right-28 px-9 text-sm py-1 hover:bg-gray-500 bg-gray-400">Back</button>
          <button className="absolute right-0 text-white px-9 text-sm py-1 hover:bg-blue-800 bg-blue-700">Next</button>

        </div>

      </div>
      <div className=" w-1/3 flex px-8 py-2 place-items-center hover:bg-gray-300 cursor-pointer bg-white text-black">
      <Image className="mx-2"
      src="/sign-in-op.svg"
      width={30}
      height={30}
      alt="Picture of the Key"
    />
    <p className="text-sm">Sign-in option</p>
      </div>
      
    </main>
  )
}
