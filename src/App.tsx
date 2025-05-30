import { Button } from "./components/Button";
import { Counter } from "./components/counter";

function App() {
  return (
    <>
      <div className="h-screen flex flex-col gap-5 items-center justify-center">
        <Counter initialCount={0} />
        <Button
          label="Clique-me"
          className="bg-blue-500 p-3 rounded-2xl hover:bg-blue-700 text-white font-bold"
        />
      </div>
    </>
  );
}

export default App;
