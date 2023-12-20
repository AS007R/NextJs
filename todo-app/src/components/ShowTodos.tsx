"use client";

type propItem = {
  name: string;
  dueDate: string;
  checked: boolean;
};
type propTodos = {
  todos: propItem[];
  handleDel: (name: string) => void;
  handleChecked: (name: string) => void;
};

const ShowTodos = ({ todos, handleDel, handleChecked }: propTodos) => {
  return (
    <>
      {todos.map((item) => (
        <div key={item.name} className="text-center mb-2 flex gap-2 w-full">
          <div className="h-full m-auto ">
            <input
              type="checkbox"
              className="h-4 w-4"
              onChange={() => handleChecked(item.name)}
            />
          </div>
          <div
            className={`min-h-10 text-left w-3/6 bg-slate-300 rounded-lg pl-2 flex text-lg py-1 text-black ${
              item.checked ? "line-through text-red-500" : ""
            }`}
          >
            {item.name}
          </div>
          <div
            className={`h-10 w-2/6 m-auto bg-slate-300 rounded-lg pl-2 flex text-lg py-1 text-black ${
              item.checked ? "font-bold text-red-500" : ""
            }`}
          >
            {!item.checked ? item.dueDate : "Comleted"}
          </div>
          <div className="h-10 w-1/6 m-auto bg-slate-300 rounded-lg">
            <button
              className="px-3 py-2 w-[80px] rounded-lg bg-red-900"
              onClick={() => handleDel(item.name)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ShowTodos;
