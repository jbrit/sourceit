import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact Us | Order Now</title>
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
      <main className=" bg-white">
        <div className="max-w-7xl px-3 mx-auto py-28">
          <div style={{ fontSize: "4rem" }} className="font-bold mb-4">
            Contact <span className="text-blue-400">Us</span>
          </div>
          <div className="text-lg mb-28" style={{ maxWidth: "295px" }}>
            Do you need further help or want to make a complaint? Kindly send us
            a message with the form.
          </div>
          <form
            className="p-24"
            style={{
              background: "#FFFFFF",
              boxShadow: "0px 4px 50px 10px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div className="grid grid-cols-2 gap-x-4 gap-y-9 w-full mb-9">
              <div className="w-full max-w-md">
                <span style={{ color: "#757575" }} className="mb-5 block">
                  First Name*
                </span>
                <input
                  className="form-input px-3 py-3 w-full"
                  type="text"
                  name="firstName"
                  required
                />
              </div>
              <div className="w-full max-w-md">
                <span style={{ color: "#757575" }} className="mb-5 block">
                  Last Name*
                </span>
                <input
                  className="form-input px-3 py-3 w-full"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
              <div className="w-full max-w-md">
                <span style={{ color: "#757575" }} className="mb-5 block">
                  Phone*
                </span>
                <input
                  className="form-input px-3 py-3 w-full"
                  type="text"
                  name="phone"
                  required
                />
              </div>
              <div className="w-full max-w-md">
                <span style={{ color: "#757575" }} className="mb-5 block">
                  Email*
                </span>
                <input
                  className="form-input px-3 py-3 w-full"
                  type="text"
                  name="email"
                  required
                />
              </div>
            </div>
            <div className="w-full mb-9">
              <span style={{ color: "#757575" }} className="mb-5 block">
                Message*
              </span>
              <textarea
                className="form-input px-3 py-3 w-full"
                name="message"
                rows="10"
                required
              ></textarea>
            </div>
            <button
              className="py-5 px-16 bg-blue-400 rounded-md text-white hover:bg-blue-500 focus:outline-none text-lg transition-all duration-500 ease-in-out"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
      <section className="h-96 quality-gadgets">
        <div style={{lineHeight: "74px"}} className="pt-24 px-24 text-white font-bold text-6xl">
          Top Quality Gadgets <br />
          You can Trust
        </div>
      </section>
      <Footer />
    </div>
  );
}
