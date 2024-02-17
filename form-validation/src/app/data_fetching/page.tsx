"use client";

import { useEffect, useState } from "react";

// const [state, setState] = useState("");
// const [loading, setLoading] = useState(false);
// const [error, setError] = useState("");
// useEffect(() => {
//   console.log("useEffect Called");
// }, []);

// const dataFetch = async () => {
//   setLoading(true);
//   try {
//     const data = await getData();
//     setState(data.content);
//   } catch (error: any) {
//     setError(error.message);
//   }
// };

// const getData = async () => {
//   const res = await fetch("https://api.quotable.io/random?tags=technology");
//   if (!res.ok) {
//     throw new Error("Could not get any Quote");
//   }
//   return res.json();
// };

function DataFetching() {
  return (
    <center className="py-10 flex flex-col gap-5">
      <div>
        <h1 className="text-2xl font-bold tracking-wide">
          Client Data Fetching.
        </h1>
        <div>new</div>
      </div>
    </center>
  );
}

export default DataFetching;
