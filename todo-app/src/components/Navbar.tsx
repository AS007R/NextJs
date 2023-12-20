import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Navbar = ({ filter, todos }: any) => {
  return (
    <div className="flex justify-between p-4 mb-2 pb-0 text-lg text-gray-300 border-b-[1px] border-gray-300">
      <Link
        href="/?todosFilter=all"
        className={` ${filter === "all" ? " text-blue-600 underline" : ""}`}
      >
        All {`(${todos.length})`}
      </Link>
      <Link
        href="/?todosFilter=active"
        className={` ${filter === "active" ? " text-blue-600 underline" : ""}`}
      >
        Active
      </Link>
      <Link
        href="/?todosFilter=completed"
        className={` ${
          filter === "completed" ? " text-blue-600 underline" : ""
        }`}
      >
        Completed
      </Link>
    </div>
  );
};

export default Navbar;
