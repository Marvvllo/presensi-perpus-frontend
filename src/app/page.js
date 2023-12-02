"use client";

import useSessionStore from "./stores/sessionStore";

export default function Home() {
  const { name, token } = useSessionStore();

  return (
    <main>
      <h1>Test</h1>
      <h2>{name}</h2>
      <h2>{token}</h2>
    </main>
  );
}
