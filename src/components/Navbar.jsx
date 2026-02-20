import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{
      padding:"18px",
      display:"flex",
      justifyContent:"center",
      gap:"40px",
      backdropFilter:"blur(10px)",
      background:"rgba(255,255,255,0.4)",
      borderBottom:"1px solid rgba(255,255,255,0.3)",
      fontWeight:"600"
    }}>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}