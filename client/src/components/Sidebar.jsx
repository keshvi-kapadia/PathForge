import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 flex flex-col justify-between py-6">

      {/* Top Section */}
      <div>

        {/* Logo */}
        <div className="px-4">
          <h1 className="text-3xl font-bold tracking-tight">
            PathForge
            <span className="text-cyan-600"> AI</span>
          </h1>

          <p className="text-zinc-500 text-sm mt-2">
            Career Intelligence Platform
          </p>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex flex-col gap-2">

          <Link
            to="/dashboard"
            className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white shadow-sm border border-zinc-200 text-zinc-900 font-medium hover:shadow-md transition-all duration-200"
          >
            <span>🏠</span>
            Dashboard
          </Link>

          <Link
            to="/career"
            className="flex items-center gap-3 px-4 py-3 rounded-2xl text-zinc-600 hover:bg-white hover:shadow-sm hover:border hover:border-zinc-200 transition-all duration-200"
          >
            <span>🎯</span>
            Careers
          </Link>

          <Link
            to="/roadmap"
            className="flex items-center gap-3 px-4 py-3 rounded-2xl text-zinc-600 hover:bg-white hover:shadow-sm hover:border hover:border-zinc-200 transition-all duration-200"
          >
            <span>🛣️</span>
            Roadmaps
          </Link>

          <Link
            to="/chat"
            className="flex items-center gap-3 px-4 py-3 rounded-2xl text-zinc-600 hover:bg-white hover:shadow-sm hover:border hover:border-zinc-200 transition-all duration-200"
          >
            <span>🤖</span>
            AI Mentor
          </Link>
        </div>
      </div>

      {/* Bottom Small Card */}
      <div className="bg-white border border-zinc-200 rounded-3xl p-5 shadow-sm">

        <p className="text-sm text-zinc-500">
          Current Focus
        </p>

        <h3 className="mt-2 text-lg font-semibold">
          MERN + AI
        </h3>

        <div className="w-full bg-zinc-200 h-2 rounded-full mt-4 overflow-hidden">
          <div className="bg-cyan-500 h-full w-[65%] rounded-full"></div>
        </div>

        <p className="text-sm text-zinc-500 mt-3">
          Learning Progress
        </p>
      </div>
    </div>
  );
}

export default Sidebar;