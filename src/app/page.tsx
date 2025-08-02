import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-dark px-6">
      <div className="text-center space-y-6">
        

        <h1 className="text-5xl font-bold tracking-tight text-white-900">
          Coming Soon
        </h1>
        <p className="text-lg text-white-600">
          We’re preparing something premium for golf lovers.
        </p>

        <div className="mt-6">
          <p className="text-sm text-white-500">Stay tuned at LTP - Golf</p>
        </div>
      </div>
    </div>
  );
}
