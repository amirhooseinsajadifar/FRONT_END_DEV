import React, { useEffect, useState } from "react";
import Calculator from "./components/Calculator";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="absolute top-5 right-5">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-300 dark:bg-gray-700 text-sm text-black dark:text-white px-4 py-2 rounded"
        >
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>
      <Calculator />
    </div>
  );
}

export default App;