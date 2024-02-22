"use client";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", formData);
      // Handle successful login (e.g., redirect to dashboard)
    } catch (error) {
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <main className="bg-blue-800 flex items-center justify-center h-screen">
      <div className="bg-white rounded-lg p-8 max-w-sm mx-auto">
        <h1 className="text-2xl font-semibold mb-6 text-black text-center">
          Login to your account
        </h1>
        <form onSubmit={handleSubmit} className="overflow-hidden">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="manoj@richpanel.com"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="............"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-500 font-bold">
              <input className="mr-2 leading-tight" type="checkbox" />
              <span className="text-sm">Remember Me</span>
            </label>
          </div>
          <button
            className="hover:bg-blue-500 bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-100% px-12"
            type="submit"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          New to MyApp?{" "}
          <a href="/register" className="text-blue-500 hover:text-blue-800">
            Sign Up
          </a>
        </p>
      </div>
    </main>
  );
}
