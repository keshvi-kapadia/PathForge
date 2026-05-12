import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full px-6 lg:px-20 py-6 flex items-center justify-between bg-transparent relative z-50">
      
      {/* Logo */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          PathForge
          <span className="text-cyan-600"> AI</span>
        </h1>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-10 text-zinc-600 font-medium">
        
        <Link
          to="/"
          className="hover:text-zinc-900 transition-colors duration-200"
        >
          Home
        </Link>

        <Link
          to="/career"
          className="hover:text-zinc-900 transition-colors duration-200"
        >
          Careers
        </Link>

        <Link
          to="/roadmap"
          className="hover:text-zinc-900 transition-colors duration-200"
        >
          Roadmaps
        </Link>

        <Link
          to="/chat"
          className="hover:text-zinc-900 transition-colors duration-200"
        >
          AI Mentor
        </Link>
      </div>

      {/* Right Buttons */}
      <div className="flex items-center gap-4">
        
        <Link
          to="/login"
          className="text-zinc-700 hover:text-zinc-900 font-medium transition-colors duration-200"
        >
          Login
        </Link>

        <button className="bg-zinc-900 text-white px-5 py-3 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;