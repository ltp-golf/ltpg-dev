import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Coming Soon | LTPGGolf</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div
        className="flex flex-col items-center justify-center min-h-screen px-6 bg-cover bg-center text-center"
        style={{ backgroundImage: "url('/closeup-golf-ball.jpg')" }}
      >
        {/* Logo */}
        <img
          src="/logo.png"
          alt="LTPGolf Logo"
          width="200"
          height="200"
          className="mb-6"
        />

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold text-[#0D1C2E] mb-3">
          We&apos;re Coming Soon
        </h1>

        <p className="text-md sm:text-lg text-[#0D1C2E]/80">
          We’re preparing something premium for golf lovers.
        </p>
      </div>
    </>
  );
}
