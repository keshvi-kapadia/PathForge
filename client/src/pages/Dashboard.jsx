import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] p-6 flex gap-6">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">

        {/* Header */}
        <div className="bg-white rounded-[2rem] border border-zinc-200 p-8 shadow-sm">

          <h1 className="text-5xl font-bold tracking-tight">
            Welcome Back 👋
          </h1>

          <p className="text-zinc-600 mt-4 text-lg">
            Continue building your future with AI-powered guidance.
          </p>

          {/* Search */}
          <div className="mt-8">
            <input
              type="text"
              placeholder="Search careers, skills, roadmaps..."
              className="w-full bg-zinc-100 border border-zinc-200 rounded-2xl px-6 py-4 outline-none focus:border-cyan-500"
            />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">

          <div className="bg-white rounded-[2rem] border border-zinc-200 p-8 shadow-sm">
            <p className="text-zinc-500">
              Career Suggestions
            </p>

            <h2 className="text-4xl font-bold mt-4">
              12+
            </h2>

            <p className="text-zinc-600 mt-2">
              AI-generated recommendations
            </p>
          </div>

          <div className="bg-white rounded-[2rem] border border-zinc-200 p-8 shadow-sm">
            <p className="text-zinc-500">
              Saved Roadmaps
            </p>

            <h2 className="text-4xl font-bold mt-4">
              5
            </h2>

            <p className="text-zinc-600 mt-2">
              Personalized learning paths
            </p>
          </div>

          <div className="bg-white rounded-[2rem] border border-zinc-200 p-8 shadow-sm">
            <p className="text-zinc-500">
              AI Mentor Chats
            </p>

            <h2 className="text-4xl font-bold mt-4">
              48
            </h2>

            <p className="text-zinc-600 mt-2">
              Conversations completed
            </p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-[2rem] border border-zinc-200 p-8 shadow-sm mt-6">

          <h2 className="text-2xl font-bold">
            Recent Activity
          </h2>

          <div className="mt-6 space-y-4">

            <div className="bg-zinc-100 rounded-2xl p-5">
              <p className="font-medium">
                Generated MERN + AI Developer Roadmap
              </p>

              <p className="text-sm text-zinc-500 mt-1">
                2 hours ago
              </p>
            </div>

            <div className="bg-zinc-100 rounded-2xl p-5">
              <p className="font-medium">
                Asked AI Mentor about internships
              </p>

              <p className="text-sm text-zinc-500 mt-1">
                Yesterday
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;