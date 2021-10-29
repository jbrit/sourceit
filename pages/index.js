import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Source It</title>
        <meta name="description" content="SourceIt Web Site" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className="py-20" style={{ background: "#FAFAFA" }}>
        <h2 className="text-center text-4xl font-bold mb-14">Our Products</h2>
        <div className="max-w-7xl px-3 mx-auto"></div>
      </section>
      <Newsletter />
      <Footer />
    </div>
  );
}
