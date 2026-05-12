import { useState } from "react";
import axios from "axios";

function Chat() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  const handleSubmit = async () => {
    if (!prompt.trim()) return;

    try {
      setLoading(true);

      // User message
      const userMessage = {
        role: "user",
        content: prompt,
      };

      // Updated conversation
      const updatedMessages = [...messages, userMessage];

      // Show user message instantly
      setMessages(updatedMessages);

      // Clear input
      setPrompt("");

      // Send full conversation to backend
      const res = await axios.post(
        `${API_BASE}/ai/career`,
        {
          messages: updatedMessages,
        }
      );

      // AI response
      const aiMessage = {
        role: "assistant",
        content: res.data.reply,
      };

      // Add AI message
      setMessages((prev) => [...prev, aiMessage]);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb] flex flex-col">

      {/* Header */}
      <div className="border-b border-zinc-200 bg-white px-6 py-5 sticky top-0 z-10 backdrop-blur-lg">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight">
            AI Career Mentor
          </h1>

          <p className="text-zinc-500 mt-1">
            Personalized career guidance powered by AI
          </p>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-6 py-10">
        <div className="max-w-5xl mx-auto space-y-6">

          {/* Empty State */}
          {messages.length === 0 && (
            <div className="text-center mt-24">

              <div className="w-20 h-20 bg-white rounded-[2rem] shadow-sm border border-zinc-200 flex items-center justify-center mx-auto text-4xl">
                🤖
              </div>

              <h2 className="mt-8 text-5xl font-bold tracking-tight">
                Meet PathForge AI
              </h2>

              <p className="text-zinc-500 mt-5 text-lg max-w-2xl mx-auto leading-relaxed">
                Your intelligent AI career mentor that understands your
                interests, asks personalized questions, and guides you
                toward the right career path.
              </p>

              {/* Suggestions */}
              <div className="mt-12 flex flex-wrap justify-center gap-4">

                <button
                  onClick={() =>
                    setPrompt(
                      "I want to become a MERN stack developer with AI skills"
                    )
                  }
                  className="bg-white border border-zinc-200 px-6 py-4 rounded-2xl hover:shadow-md transition-all duration-200"
                >
                  MERN + AI Developer
                </button>

                <button
                  onClick={() =>
                    setPrompt(
                      "I am interested in UI UX and frontend development"
                    )
                  }
                  className="bg-white border border-zinc-200 px-6 py-4 rounded-2xl hover:shadow-md transition-all duration-200"
                >
                  UI/UX + Frontend
                </button>

                <button
                  onClick={() =>
                    setPrompt(
                      "How can I become an AI engineer as a student?"
                    )
                  }
                  className="bg-white border border-zinc-200 px-6 py-4 rounded-2xl hover:shadow-md transition-all duration-200"
                >
                  AI Engineer
                </button>
              </div>
            </div>
          )}

          {/* Messages */}
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.role === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

              {/* AI Message */}
              {msg.role === "assistant" && (
                <div className="flex gap-4 max-w-4xl">

                  <div className="w-12 h-12 rounded-2xl bg-zinc-900 text-white flex items-center justify-center text-xl shrink-0 shadow-sm">
                    🤖
                  </div>

                  <div className="bg-white border border-zinc-200 rounded-[2rem] px-7 py-6 shadow-sm whitespace-pre-wrap leading-relaxed text-zinc-800">
                    {msg.content}
                  </div>
                </div>
              )}

              {/* User Message */}
              {msg.role === "user" && (
                <div className="max-w-2xl bg-zinc-900 text-white rounded-[2rem] px-7 py-5 shadow-sm whitespace-pre-wrap leading-relaxed">
                  {msg.content}
                </div>
              )}
            </div>
          ))}

          {/* Loading Animation */}
          {loading && (
            <div className="flex justify-start">

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-2xl bg-zinc-900 text-white flex items-center justify-center text-xl shadow-sm">
                  🤖
                </div>

                <div className="bg-white border border-zinc-200 rounded-[2rem] px-7 py-6 shadow-sm">
                  <div className="flex gap-2 items-center">
                    <div className="w-3 h-3 bg-zinc-400 rounded-full animate-bounce"></div>
                    <div className="w-3 h-3 bg-zinc-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-3 h-3 bg-zinc-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>
      </div>

      {/* Input Area */}
      <div className="sticky bottom-0 bg-[#f5f7fb] px-6 py-6">
        <div className="max-w-5xl mx-auto">

          <div className="bg-white border border-zinc-200 rounded-[2rem] p-4 shadow-sm flex items-end gap-4">

            <textarea
              rows="1"
              placeholder="Ask PathForge AI about your future..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
              className="flex-1 resize-none outline-none bg-transparent px-2 py-3 text-zinc-800"
            />

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="bg-zinc-900 text-white px-7 py-3 rounded-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50"
            >
              Send
            </button>
          </div>

          <p className="text-center text-zinc-400 text-sm mt-4">
            PathForge AI may occasionally make mistakes. Verify important advice.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Chat;