import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>LTPGolf – Coming Soon</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className="flex items-center justify-center min-h-screen bg-[#0D1C2E] px-6">
        <div className="text-center space-y-6">
          {/* Logo */}
          <div className="flex justify-center">
            <Image
              src="/logo.png"
              alt="LTPGolf Logo"
              width={100}
              height={100}
              className="mx-auto"
              priority
            />
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold tracking-tight text-white">
            Coming Soon
          </h1>
          <p className="text-lg text-gray-300">
            We’re preparing something premium for golf lovers.
          </p>

          <div className="mt-6">
            <p className="text-sm text-gray-400">Stay tuned at LTP - Golf</p>
          </div>
        </div>
      </div>
    </>
  );
}
