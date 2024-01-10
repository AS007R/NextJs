"use client";

async function getDetail(id: number) {
  const res = await fetch(
    `https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`
  );
  if (!res.ok) {
    throw new Error("No bloge found");
  }
  return await res.json();
}
async function blogDetail({ params }: any) {
  const { blog } = await getDetail(params.id);
  console.log(blog);
  return (
    <div className="p-24 flex flex-col gap-1 flex-wrap">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {blog.title}
      </h1>
      <p className="text-blue-800 text-xl">{blog.description}</p>
      <p className="text-justify">{`${blog.content_text}`}</p>
    </div>
  );
}

export default blogDetail;
