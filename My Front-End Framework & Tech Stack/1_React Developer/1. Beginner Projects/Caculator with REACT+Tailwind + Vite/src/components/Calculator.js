import React, { useState, useEffect } from "react";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
  ];

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch {
        setResult("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const handleKeyPress = (e) => {
    const validKeys = [..."0123456789.+-*/", "Enter", "Backspace"];
    if (!validKeys.includes(e.key)) return;

    if (e.key === "Enter") handleClick("=");
    else if (e.key === "Backspace") setInput(input.slice(0, -1));
    else setInput((prev) => prev + e.key);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 w-72">
      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded mb-4">
        <div className="text-right text-lg font-mono">{input || "0"}</div>
        <div className="text-right text-sm text-gray-500 dark:text-gray-300">
          {result}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            className={`p-3 rounded font-semibold text-white ${
              btn === "="
                ? "bg-green-500"
                : btn === "C"
                ? "bg-red-500"
                : "bg-blue-500"
            } hover:opacity-80`}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;