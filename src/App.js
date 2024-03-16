import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Browse from "./pages/browse/Browse";
import Search from "./pages/search/Search";
import SearchAV from "./pages/search/SearchAV";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/search" element={<Search />} />
        <Route path="/searchav" element={<SearchAV />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
