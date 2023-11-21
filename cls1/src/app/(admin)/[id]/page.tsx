"use Client"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";

export async function generateStaticParams() {
    const posts: number[] = [1,2,3,4,5]
   
    return posts.map((post) => ({
      id: post.toString(),
    }))
  }
export default function page({ params }: {params: { id: string }}) {
  return (
    <div>
<h1>Value is: {params.id}</h1>
    </div>
  )
}
