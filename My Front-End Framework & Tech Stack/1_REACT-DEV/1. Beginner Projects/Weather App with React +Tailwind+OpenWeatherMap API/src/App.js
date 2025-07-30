import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <SearchBar />
      <WeatherCard />
    </div>
  );
}

export default App;