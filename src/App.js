import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CategorySelection from "./CategorySelection";
import NewsPage from "./NewsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<CategorySelection />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
