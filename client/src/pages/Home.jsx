import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <h1 className="text-6xl font-bold leading-tight">
          Forge Your Future With
          <span className="text-cyan-400"> AI Guidance</span>
        </h1>

        <p className="mt-6 max-w-2xl text-gray-400 text-lg">
          PathForge AI helps students and developers discover career paths,
          generate personalized roadmaps, and receive AI-powered mentorship.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-cyan-500 px-6 py-3 rounded-xl text-lg hover:bg-cyan-400">
            Get Started
          </button>

          <button className="border border-cyan-500 px-6 py-3 rounded-xl text-lg">
            Explore Careers
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="px-10 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-zinc-900 p-6 rounded-2xl">
            <h3 className="text-2xl font-semibold text-cyan-400">
              AI Career Guidance
            </h3>
            <p className="mt-4 text-gray-400">
              Discover career paths based on your interests and skills.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl">
            <h3 className="text-2xl font-semibold text-cyan-400">
              Smart Roadmaps
            </h3>
            <p className="mt-4 text-gray-400">
              Generate personalized learning roadmaps with AI.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl">
            <h3 className="text-2xl font-semibold text-cyan-400">
              AI Mentor Chat
            </h3>
            <p className="mt-4 text-gray-400">
              Ask questions and receive mentorship guidance instantly.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-zinc-800 text-gray-500">
        © 2026 PathForge AI. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;