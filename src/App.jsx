import React from "react";
import Add_user from "./components/Add_user";
import AuthPage from "./components/AuthPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Add_user/>}/>
        <Route path="/" element={<AuthPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;