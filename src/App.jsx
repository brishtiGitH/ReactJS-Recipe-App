import { useContext, useState } from "react";
// import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/index";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import Details from "./Pages/Details";
import { GlobalContext } from "./Context/index";
import Error from "./Components/Error";

function App() {
  return (
    <div className="p-10">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/favorites" element={<Favorites />} />
        <Route exact path="/recipe-item/:itemid" element={<Details />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
