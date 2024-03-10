import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-[100vh] flex flex-col items-center justify-center bg-zinc-900 gap-4">
      <p className="text-white text-7xl">En construction</p>
      <div className="flex flex-row items-center justify-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="white" viewBox="0 0 16 16">
          <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
          <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
        </svg>
        <a href="https://discord.gg/WJnNKK22Rg" className="text-white underline">Discord</a>
      </div>
    </main>
  );
}
