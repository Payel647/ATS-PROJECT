// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PreviewPage from "./pages/PreviewPage";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#F9FAFB] text-[#1F2937] font-sans">
        <Routes>
          <Route path="/" element={<PreviewPage />} />
          {/* You can add more pages here later */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
