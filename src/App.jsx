import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("bg-indigo-600 hover:bg-indigo-700");
  const [rounded, setRounded] = useState("rounded-xl");
  const [textSize, setTextSize] = useState("text-3xl");
  const [borderWidth, setBorderWidth] = useState("border");

  return (
    // Layout wrapper:

    // Card container:

    <div className="min-h-full flex items-center justify-center p-6">
      {/*Heading Container:*/}
      <div className="max-w-xl w-full text-center bg[--color-card] border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
        <h1 className={`${textSize} font-semibold text-white`}>
          Hello React + Tailwind v4
        </h1>
        <p className="mt-2 text-slate-300">
          Use the controls to experiment with Tailwind utilities in real time.
        </p>
        <div className="mt-6">
          <button
            className={`${color} ${rounded} ${borderWidth} px-6 py-3 text-white font-medium transition focus:outline-none focus:ring-2 focus:ring-indigo-400`}
          >
            Tailwind Button
          </button>
        </div>
        {/* Controls grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-4">
          {/* Color control*/}
          <Control label="Color">
            <Select
              value={color}
              onChange={setColor}
              options={[
                "bg-indigo-600 hover:bg-indigo-700",
                "bg-blue-600 hover:bg-blue-700",
                "bg-emerald-600 hover:bg-emerald-700",
                "bg-rose-600 hover:bg-rose-700",
                "bg-amber-600 hover:bg-amber-700",
              ]}
            ></Select>
          </Control>
          {/* Text Size control*/}
          <Control label="Text Size">
            <Select
              value={textSize}
              onChange={setTextSize}
              options={[
                "text-xl",
                "text-2xl",
                "text-3xl",
                "text-4xl",
                "text-5xl",
              ]}
            ></Select>
          </Control>
          {/* Button Corner Roundesss Control*/}
          <Control label="Button Roundness">
            <Select
              value={rounded}
              onChange={setRounded}
              options={[
                "rounded-md",
                "rounded-xl",
                "rounded-2xl",
                "rounded-full",
              ]}
            ></Select>
          </Control>

          {/* Button Border Width Control*/}
          <Control label="Button Border">
            <Select
              value={borderWidth}
              onChange={setBorderWidth}
              options={["border-1", "border-3", "border-5", "border-7"]}
            ></Select>
          </Control>
        </div>
      </div>
    </div>
  );
}

// Control function/component
function Control({ label, children }) {
  return (
    <label className="block">
      <span className="block mb-1 text-slate-200 text-sm">{label}</span>
      {children}
    </label>
  );
}

// Reuseable select component
function Select({ value, onChange, options }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-white/80 text-slate-900 px-3 py-2 rounded-md outline-none ring-1 ring-slate-300 focus:ring-2 focus:ring-indigo-400"
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}
export default App;
