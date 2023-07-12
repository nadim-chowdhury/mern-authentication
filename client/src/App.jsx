import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "bootstrap/dist/js/bootstrap";

function App() {
  return (
    <div className="container my-4">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <p className="mt-4">
        Developed by &nbsp;
        <Link
          to="https://nadim.vercel.app"
          className="text-decoration-none fw-bold text-primary"
        >
          Nadim Chowdhury
        </Link>
      </p>
    </div>
  );
}

export default App;
