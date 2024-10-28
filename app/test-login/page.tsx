"use client"
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const openModal = (type) => {
    setIsLogin(type === "login");
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login/signup logic here
    console.log({ email, password });
  };

  return (
    <div className={`relative h-screen bg-white`}>
      {/* Content */}
      <div className={`p-10 ${isModalOpen ? "opacity-30" : ""}`}>
        <h1 className="text-4xl font-bold text-center mb-4">
          Welcome to Pinterest Clone
        </h1>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => openModal("login")}
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Login
          </button>
          <button
            onClick={() => openModal("signup")}
            className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Signup
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
            <h2 className="text-2xl font-semibold text-center mb-6">
              {isLogin ? "Login" : "Signup"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                {isLogin ? "Login" : "Signup"}
              </button>
            </form>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
