import React from "react";
import "./App.css"
import 'react-toastify/dist/ReactToastify.css';
import { Home } from "./screencomponentes/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Adding } from "./screencomponentes/adding";
import { Screen } from "./screencomponentes/screen";
import { Edit } from "./screencomponentes/edit";

function Todo() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Screen/>}/>
      <Route path="/add" element={<Adding/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/edit" element={<Edit/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
  }
export { Todo }