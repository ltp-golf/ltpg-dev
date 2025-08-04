import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>


      <div className="flex items-center justify-center min-h-screen bg-white px-6">
        <div className="text-center space-y-6">
          {/* Logo */}
          <div className="flex justify-center">
            <img
              src="/logo.png"
              alt="LTPGolf Logo"
              width="300"
              height="300"
              className="mx-auto"
            />
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold tracking-tight text-black">
            Coming Soon
          </h1>
          <p className="text-lg text-black-300">
            We’re preparing something premium for golf lovers.
          </p>

          <div className="mt-6">
            <p className="text-sm text-black-400">Stay tuned at LTP - Golf</p>
          </div>a
        </div>
      </div>
    </>
  );
}
