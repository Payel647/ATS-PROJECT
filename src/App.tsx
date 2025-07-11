import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
function App() {
  return (
     <BrowserRouter>
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-10">
            <Navbar />
            <Routes>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login/>} />
              <Route path="/" element={<Landing />} />
            </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
