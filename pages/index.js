import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

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
      <section className="py-20 bg-blue-400 text-white newsletter">
        <h2 className="text-center text-4xl font-bold mb-7">
          Sign Up to Our Newsletter
        </h2>
        <div className="flex justify-center mb-7">
          <span className="newsletter-circle"></span>
          <span
            className="newsletter-circle"
            style={{ zIndex: 1, marginLeft: "-13px" }}
          ></span>
          <span
            className="newsletter-circle"
            style={{ zIndex: 2, marginLeft: "-13px" }}
          ></span>
          <span
            className="newsletter-circle"
            style={{ zIndex: 3, marginLeft: "-13px" }}
          ></span>
          <span
            className="newsletter-circle"
            style={{ zIndex: 4, marginLeft: "-13px" }}
          ></span>
          <span
            className="newsletter-circle"
            style={{ zIndex: 5, marginLeft: "-13px" }}
          ></span>
        </div>
        <div className="text-center font-semibold text-xl max-w-md mx-auto mb-16">
          Receive latest news, updates and many other news every week.
        </div>
        <form className="max-w-md mx-auto relative">
          <input
            className="inline-block w-full bg-white rounded-md outline-none focus:bg-gray-100 text-black"
            style={{ padding: "20px 87px 20px 38px" }}
            placeholder="Enter email address"
            type="email"
            required
            />
          <button
            className="inline-block absolute"
            style={{
              background: "#F7B24B",
              borderRadius: "5px",
              width: "59px",
              height: "43px",
              right: "14px",
              top: "20px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
            type="submit"
            ></button>
            
        </form>
      </section>
      <Footer />
    </div>
  );
}
