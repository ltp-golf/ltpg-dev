import Image from "next/image";

export default function Home() {
  return (
      <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-6"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/coming-soon-text-abstract-sunrise-dark-background-with-motion-effect_157027-1073.jpg')",
      }}
    >
      <div className="bg-white/80 p-10 rounded-xl text-center shadow-lg backdrop-blur-md animate-fade-in space-y-6 max-w-xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight animate-pulse">
          Coming Soon
        </h1>
        <p className="text-gray-700 text-lg">
          We're crafting something premium for golf lovers.
        </p>
        <p className="text-sm text-gray-500">Stay tuned with LTP - Golf</p>
      </div>
    </div>
  );
}
