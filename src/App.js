import React from "react";
import "./App.css";
import Main from "./components/layout/Main";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";

function App() {
  return (
    <div className="wrapper h-screen">
      <div className="nav">
        {" "}
        <Navbar />
      </div>
      <div className="sidebar">
        {" "}
        <Sidebar />
      </div>
      <div className="main">
        {" "}
        <Main />
      </div>
    </div>
  );
}

export default App;
