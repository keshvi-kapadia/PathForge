import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-black text-white">
      <h1 className="text-2xl font-bold text-cyan-400">
        PathForge AI
      </h1>

      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/roadmap">Roadmap</Link>
        <Link to="/chat">AI Mentor</Link>
      </div>

      <Link
        to="/login"
        className="bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-400"
      >
        Login
      </Link>
    </nav>
  );
}

export default Navbar;