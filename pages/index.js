import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SourceMyGadgets</title>
        <meta name="description" content="SourceMyGadgets Website" />
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
        <h2 className="text-center text-4xl font-bold mb-14">
          Product Categories
        </h2>
        <div className="max-w-7xl px-3 overflow-x-auto mx-auto">
          <div className="grid  grid-flow-col  grid-rows-1 auto-cols-auto mb-9">
            <ProductCard name="Smartphones" width={197} height={148} />
            <ProductCard name="Computers" width={380.79} height={144.49} />
            <ProductCard name="Consoles" width={240} height={188} />
            <ProductCard name="Smartwatches" width={91} height={169} />
            <ProductCard name="Accessories" width={180} height={180} />
          </div>
          <div className="flex items-center justify-center">
            <Link href="/order-now">
              <button
                className="py-5 px-16 bg-blue-400 rounded-md text-white hover:bg-blue-500 focus:outline-none text-lg transition-all duration-500 ease-in-out"
                type="submit"
              >
                Order Now
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Newsletter />
      <Footer />
    </div>
  );
}
