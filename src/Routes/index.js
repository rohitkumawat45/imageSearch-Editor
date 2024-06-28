import * as React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Nextpage from "../Components/Nextpage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-caption" element={<Nextpage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
