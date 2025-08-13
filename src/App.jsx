import { useState } from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import { useAppContext } from "./context/appContext";

function App() {

//  const {} = useAppContext()

  return (
    <>

    <div>
      <h1>Hello</h1>
      
    
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

   

      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage/>} />
      </Routes>
    </div>
    </>
  );
}

export default App;
