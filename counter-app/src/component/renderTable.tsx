type dataProp = {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
};
type renderTableProp = {
  data: dataProp[];
};

export default function RenderTable({ data }: renderTableProp) {
  return (
    <div>
      {data.length == 0 ? (
        <p>No item to show</p>
      ) : (
        <p className=" text-red-400 font-bold text-xl py-3 ">
          {data[0].category}:
        </p>
      )}
      {data.map((item) => (
        <div key={item.name}>{item.name}</div>
      ))}
    </div>
  );
}
