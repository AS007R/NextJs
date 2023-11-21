"use client"
import Button from "@/components/Button"
import { useState } from "react";


export default function page({params}: {params: {dynamic: string}}) {
  const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count+1);
    }

  return(
    <div className=" my-5 justify-center items-center w-full flex gap-5">
      <h1 className="text-center">Page details</h1>
      <h1 className="text-center text-white text-3xl font-bold">Page: {params.dynamic}</h1>
      <Button count={count} onClick={handleClick}/>
      <Button count={count} onClick={handleClick}/>
    </div>
  )
}
