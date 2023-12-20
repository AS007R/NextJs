"use client";
import AddTodo from "@/components/AddTodo";
import Navbar from "@/components/Navbar";
import ShowTodos from "@/components/ShowTodos";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
type typeTodo = {
  name: string;
  dueDate: string;
  checked: boolean;
};

export default function Home() {
  const [todos, setTodos] = useState<typeTodo[]>([]);
  const searchParams = useSearchParams();

  const filter = searchParams.get("todosFilter");
  let filterTodos = todos;
  if (filter === "active") {
    filterTodos = todos.filter((item) => !item.checked);
  } else if (filter === "completed") {
    filterTodos = todos.filter((item) => item.checked);
  }

  function handleAddTodo(name: string, dueDate: string) {
    setTodos((prev) => [{ name, dueDate, checked: false }, ...prev]);
  }

  function handleDel(name: string) {
    const newItems = todos.filter((item: typeTodo) => item.name !== name);
    setTodos(newItems);
  }
  function handleChecked(name: string) {
    const newItems = todos.map((item) => {
      if (item.name === name) {
        item.checked = !item.checked;
      }
      return item;
    });
    setTodos(newItems);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col p-2 w-[500px] border-[1px] border-gray-300">
        <div className="text-center w-full">
          <h1 className="text-3xl  font-bold bg-blue-500 p-3">Todo App</h1>
        </div>
        <AddTodo addTodo={handleAddTodo} />
        {todos.length === 0 && (
          <h1 className="text-3xl text-center font-bold bg-blue-500 p-3">
            Enjoy Your Day
          </h1>
        )}
        {todos.length > 0 && <Navbar filter={filter} todos={todos} />}
        <ShowTodos
          todos={filterTodos}
          handleDel={handleDel}
          handleChecked={handleChecked}
        />
      </div>
    </main>
  );
}
