"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  const handleConnectPage = () => {
    setTimeout(() => {
      router.push("/dashboard");
    }, 3000);
  };

  return (
    <main className="bg-blue-800 flex items-center justify-center h-screen">
      <div className="bg-white rounded-lg p-8 shadow-lg w-96">
        <h1 className="text-2xl font-medium mb-4 text-center text-black">
          Facebook Page Integration
        </h1>
        <div className="flex justify-center pt-4">
          <button
            onClick={handleConnectPage}
            className="bg-blue-600 hover:bg-blue-700 text-white w-screen py-2 px-4 rounded"
          >
            Connect Page
          </button>
        </div>
      </div>
    </main>
  );
}
