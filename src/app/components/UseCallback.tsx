"use client";
import { useState, useCallback } from "react";

interface IButton {
  onClicks: () => void;
  count: {
    num: number;
  };
}

const CounterButton = function ({ onClicks, count }: IButton) {
  console.log("카운터 버튼 렌더링");
  return (
    <button
      className="border-solid border-2 border-sky-400 bg-red-400 w-20 m-2"
      onClick={onClicks}
    >
      {count.num}
    </button>
  );
};

export default function UseCallBack() {
  const [count1, setCount1] = useState({ num: 0 });

  const increament1 = useCallback(() => {
    setCount1({ num: count1.num + 1 });
  }, [count1]);

  const [count2, setCount2] = useState({ num: 0 });

  const increament2 = useCallback(() => {
    setCount2({ num: count2.num + 1 });
  }, [count2]);

  const [render, setRender] = useState(false);
  console.log(count1.num, count2.num);
  return (
    <div className="App">
      <div>{count1.num}</div>
      <div>{count2.num}</div>
      <CounterButton onClicks={increament1} count={count1} />
      <CounterButton onClicks={increament2} count={count2} />
      <button onClick={() => setRender((prev) => !prev)}>리렌더</button>
    </div>
  );
}
