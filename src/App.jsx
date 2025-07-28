import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import "./App.css";

const App = () => {
  return (
    <div className="grid-container">
      <Header />
      <Sidebar />
      <Home />
    </div>
  );
};

export default App;
