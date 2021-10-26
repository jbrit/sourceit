import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Source It</title>
        <meta name="description" content="SourceIt Web Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="bg-white py-4">
        <div className="max-w-7xl px-3 mx-auto">
          <div className="flex items-center font-normal">
            <span className="inline-block mr-auto">
              <Image src="/logo.png" height="85" width="156" />
            </span>
            <div className="text-lg">
              <Link href="/">
                <a className="inline-block mx-6">Home</a>
              </Link>
              <a className="inline-block mx-6">About</a>
              <Link href="/">
                <a className="inline-block mx-6">Contact Us</a>
              </Link>
            </div>
            <button className="ml-20 py-4 px-8 bg-blue-400 rounded-md text-white hover:bg-blue-500 focus:outline-none text-lg">
              Get Started
            </button>
          </div>
        </div>
      </nav>
      <div className="max-w-7xl px-3 mx-auto"></div>
    </div>
  );
}
