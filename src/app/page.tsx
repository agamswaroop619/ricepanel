import Image from "next/image";

export default function Home() {
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
