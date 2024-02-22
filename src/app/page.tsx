"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const currentUser = null; // This should be your actual logic to determine if a user is logged in

  useEffect(() => {
    if (!currentUser) {
      router.push("/register");
    } else {
      router.push("/dashboard");
    }
  }, [currentUser, router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Prototype
      <a href="/register">
        <button>Register page</button>
      </a>
      <a href="/fbconnect">
        <button>Connect page</button>
      </a>
      <a href="/login">
        <button>Login page</button>
      </a>
      <a href="/logout">
        <button>Delete page</button>
      </a>
    </main>
  );
}
