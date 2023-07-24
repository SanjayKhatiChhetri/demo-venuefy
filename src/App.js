/* eslint-disable no-unused-vars */
import React from "react";
import { Navbar } from "./components/navbar";
import { MainContent } from "./components/main";
import { Footer } from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
