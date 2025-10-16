import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("bg-indigo-600 hover:bg-indigo-700");
  const [rounded, setRounded] = useState("rounded-xl");
  const [textSize, setTextSize] = useState("text-3xl");

  return (
    <>
      {/* Card Container*/}
      <div clasName="min-h-full flex flex-col items-center justify-center p-6">
        <div>
          <h1 className={`${textSize} font-semibold`}>
            Hello React + Tailwind
          </h1>
        </div>
      </div>
    </>
  );
}

export default App;
