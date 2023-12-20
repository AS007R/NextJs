"use client";
import { InputHTMLAttributes, useRef } from "react";
type onPropAdd = {
  addTodo: (name: string, date: string) => void;
};
const AddTodo = ({ addTodo }: onPropAdd) => {
  const inputNameElem = useRef<HTMLInputElement>(null!);
  const inputDateElem = useRef<HTMLInputElement>(null!);

  function handleSubmit(event: any) {
    event.preventDefault();
    const inputName = inputNameElem.current.value;
    const inputDate = inputDateElem.current.value;
    inputNameElem.current.value = "";
    inputDateElem.current.value = "";
    addTodo(inputName, inputDate);
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="flex gap-2 my-2 text-center w-full">
        <div className="w-3/6">
          <input
            type="text"
            ref={inputNameElem}
            placeholder="Todo Name."
            className="text-black h-10 w-full pl-2 rounded-lg"
          />
        </div>
        <div className="w-2/6">
          <input
            type="date"
            ref={inputDateElem}
            className="text-black h-10 px-2  w-full rounded-lg"
          />
        </div>
        <div className="w-1/6">
          <button className="px-3 py-2 w-[80px] rounded-lg bg-blue-900">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddTodo;
