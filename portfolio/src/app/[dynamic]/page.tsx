"use client"
export default function page({params}: {params: {dynamic: string}}) {
  return(
    <div>
      <h1 className="text-center">Page details</h1>
      <h1 className="text-center text-red-700 text-3xl font-bold">Page: {params.dynamic}</h1>
    </div>
  )
}
