import { error } from "console";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const getBlogs = async () => {
  const res = await fetch(
    "https://api.slingacademy.com/v1/sample-data/blog-posts?offset=0&limit=50"
  );
  if (!res.ok) {
    throw new Error("No blog found");
  }
  return await res.json();
};

async function blogPage() {
  const blog = await getBlogs();
  // console.log(blog.blogs[2]);
  return (
    <div className="flex flex-wrap p-4">
      {blog.blogs.map((item: any) => (
        <Link href={`/blog/${item.id}`}>
          <Card className="m-3 cursor-pointer">
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription className="text-justify">
                {item.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <button className="bg-slate-200 px-2 py-1 rounded-lg">
                {item.category}
              </button>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export default blogPage;
