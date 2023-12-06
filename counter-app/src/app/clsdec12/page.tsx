"use client";
import RenderTable from "@/component/renderTable";
type dataProp = {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
};
const page = () => {
  const data: dataProp[] = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ];
  const fruits = data.filter((item) => item.category == "Fruits");
  const vegetables = data.filter((item) => item.category == "Vegetables");

  return (
    <div className=" text-center w-full py-6">
      <RenderTable data={fruits} />
      <RenderTable data={vegetables} />
    </div>
  );
};

export default page;
