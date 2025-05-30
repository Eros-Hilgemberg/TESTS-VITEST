import { useState } from "react";

type CounterProps = { initialCount: number };

export const Counter: React.FC<CounterProps> = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    // Se quiser ver o valor atualizado, use um useEffect
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const restart = () => {
    setCount(initialCount);
  };

  return (
    <>
      <div className="flex gap-2 font-bold">
        <h1>Count:</h1>
        <h1 data-testid="counterNumber">{count}</h1>
      </div>
      <div className="flex gap-2">
        <button
          className="bg-green-300 p-3 rounded-2xl hover:bg-green-500"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="bg-red-300 p-3 rounded-2xl hover:bg-red-500"
          onClick={decrement}
        >
          Decrement
        </button>
        <button
          className="bg-blue-300 p-3 rounded-2xl hover:bg-blue-500"
          onClick={restart}
        >
          Restart
        </button>
      </div>
    </>
  );
};
