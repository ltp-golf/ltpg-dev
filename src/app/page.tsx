import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-6">
      <div className="text-center space-y-6">
        

        <h1 className="text-5xl font-bold tracking-tight text-gray-900 animate-pulse">
          Coming Soon
        </h1>
        <p className="text-lg text-gray-600 animate-fade-in delay-300">
          We’re preparing something premium for golf lovers.
        </p>

        <div className="mt-6 animate-fade-in delay-500">
          <p className="text-sm text-gray-500">Stay tuned at LTP - Golf</p>
        </div>
      </div>
    </div>
  );
}
