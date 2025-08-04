import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Coming Soon | LTPGolf</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div
        className="flex items-center justify-center min-h-screen px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/closeup-golf-ball.jpg')" }}
      >
        <div className="text-center space-y-6 bg-white/80 p-8 rounded-xl shadow-lg backdrop-blur-md">
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
          <p className="text-lg text-gray-700">
            We’re preparing something premium for golf lovers.
          </p>
        </div>
      </div>
    </>
  );
}
