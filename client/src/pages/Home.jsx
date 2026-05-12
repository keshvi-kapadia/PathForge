import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] text-zinc-900 overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative px-6 lg:px-20 pt-24 pb-32">

        {/* Background Blur */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-200/40 blur-3xl rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-zinc-200 px-4 py-2 rounded-full shadow-sm">
              <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
              <p className="text-sm text-zinc-600">
                AI-powered career mentorship
              </p>
            </div>

            <h1 className="mt-8 text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              Build Your
              <span className="text-cyan-600"> Dream Career </span>
              With AI
            </h1>

            <p className="mt-8 text-lg text-zinc-600 leading-relaxed max-w-xl">
              PathForge AI helps students and developers discover career paths,
              generate personalized roadmaps, and receive AI mentorship for
              faster growth.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="bg-zinc-900 text-white px-7 py-4 rounded-2xl font-medium hover:scale-105 transition-all duration-300 shadow-lg">
                Start Exploring
              </button>

              <button className="bg-white border border-zinc-200 px-7 py-4 rounded-2xl font-medium hover:border-zinc-400 transition-all duration-300">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-14">
              <div>
                <h2 className="text-3xl font-bold">10K+</h2>
                <p className="text-zinc-500 mt-1">Career Paths</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">24/7</h2>
                <p className="text-zinc-500 mt-1">AI Guidance</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">100%</h2>
                <p className="text-zinc-500 mt-1">Personalized</p>
              </div>
            </div>
          </div>

          {/* Right Side UI Card */}
          <div className="relative">

            {/* Main Card */}
            <div className="bg-white rounded-[2rem] shadow-2xl border border-zinc-200 p-8 backdrop-blur-xl">

              {/* Chat Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg">
                    AI Career Mentor
                  </h3>

                  <p className="text-sm text-zinc-500 mt-1">
                    Personalized guidance assistant
                  </p>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-cyan-100 flex items-center justify-center text-2xl">
                  🤖
                </div>
              </div>

              {/* Chat Messages */}
              <div className="mt-8 space-y-5">

                <div className="bg-zinc-100 rounded-2xl p-4 max-w-xs">
                  <p className="text-sm text-zinc-700">
                    I want to become a MERN + AI developer.
                  </p>
                </div>

                <div className="bg-cyan-500 text-white rounded-2xl p-4 ml-auto max-w-sm">
                  <p className="text-sm leading-relaxed">
                    Great choice! Start with React and Node.js, then move into
                    AI integrations and agentic workflows.
                  </p>
                </div>

                <div className="bg-zinc-100 rounded-2xl p-4 max-w-xs">
                  <p className="text-sm text-zinc-700">
                    Can you generate a roadmap for me?
                  </p>
                </div>
              </div>

              {/* Input */}
              <div className="mt-8 flex items-center bg-zinc-100 rounded-2xl px-4 py-3">
                <input
                  type="text"
                  placeholder="Ask PathForge AI..."
                  className="bg-transparent flex-1 outline-none text-sm"
                />

                <button className="bg-zinc-900 text-white px-5 py-2 rounded-xl text-sm">
                  Send
                </button>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-3xl shadow-xl border border-zinc-200 p-5 w-56">
              <p className="text-sm text-zinc-500">
                Suggested Career
              </p>

              <h3 className="mt-2 text-xl font-semibold">
                AI Engineer
              </h3>

              <p className="mt-2 text-sm text-zinc-600">
                Based on your interests in development and automation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;