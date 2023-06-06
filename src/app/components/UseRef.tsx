"use client";
import React from "react";
import { useRef, useState } from "react";

const UseRef = () => {
  const [render, setRender] = useState(false);

  const countRef = useRef(0); // 참조 없이 선언

  const inputRef = useRef<HTMLInputElement | null>(null);

  const onFocus = () => {
    inputRef.current?.focus();
  };

  console.log("countRef", countRef);

  let count = 0;

  console.log("render 후 ---REF 값", countRef.current);
  console.log("render 후 ---COUNT 값", count);

  const increaseRef = () => {
    countRef.current += 1;
    console.log("REF +", countRef.current);
  };

  const increaseCount = () => {
    count++;
    console.log("COUNT +", count);
  };

  const doRender = () => {
    setRender((prev) => !prev);
  };

  return (
    <div>
      <h1>REF TEST</h1>
      <h2>Ref : {countRef.current}</h2>
      <h2>count : {count}</h2>

      <div>
        <button
          className="bg-red-500 mr-2 rounded-md cursor-pointer"
          onClick={increaseRef}
        >
          Ref-Count
        </button>
        <button
          className="bg-blue-500 mr-2 rounded-md cursor-pointer"
          onClick={increaseCount}
        >
          count
        </button>
        <button
          className="bg-green-500 mr-2 rounded-md cursor-pointer"
          onClick={doRender}
        >
          Render
        </button>

        <div className="mt-10 flex flex-col">
          <input
            type="text"
            ref={inputRef}
            placeholder="버튼을 누르면 포커스가 이동됩니다."
            className="border-solid border-2 border-red-500 mb-5 w-60 h-10"
          />
          <button
            className="bg-red-500 mr-2 rounded-md cursor-pointer w-40 h-10"
            onClick={onFocus}
          >
            포커스이동
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseRef;
