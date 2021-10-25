import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Source It</title>
        <meta name="description" content="SourceIt Web Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="bg-white py-7">
        <div className="flex items-center">
          <div>
            <Link href="/">
              <a className="inline-block mx-6">Home</a>
            </Link>
            <a className="inline-block mx-6">About</a>
            <Link href="/">
              <a className="inline-block mx-6">Contact Us</a>
            </Link>
          </div>

          <a className="py-4 px-8 bg-blue-300 rounded-md text-white">
            Get Started
          </a>
        </div>
      </nav>
    </div>
  );
}
