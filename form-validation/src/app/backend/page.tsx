import { client } from "../../../sanity/lib/client";

async function getData() {
  const data = await client.fetch("*[_type == 'news']", {});
  return data;
}

const page = async () => {
  const data = await getData();
  console.log(data);
  return (
    <center className="py-10">
      {data.map((item: any) => (
        <h1 key={item.name}>{item.hobbies[0]}</h1>
      ))}
    </center>
  );
};

export default page;
