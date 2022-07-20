import React from "react";

export default function Button({ text, fn }) {
  return (
    <>
      <button
        onClick={() => fn()}
        className="bg-[blue] hover:bg-blue-500 text-white font-bold py-2 rounded w-[80px] text-center"
      >
        {text}
      </button>
    </>
  );
}
