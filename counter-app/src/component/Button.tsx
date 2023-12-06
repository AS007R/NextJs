"use client";

import { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <button
        className="bg-gray-600 px-5 py-3 rounded-xl"
        onClick={handleClick}
      >
        Click
      </button>

      <p>You have clicked the button {count} times</p>
    </div>
  );
};

export default Button;
