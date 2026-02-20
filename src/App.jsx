import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Dashboard from "./pages/Dashboard";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

export default function App() {
  const { state } = useContext(AppContext);

  return (
    <div className={state.theme === "dark" ? "dark" : ""}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}