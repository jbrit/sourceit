import Head from "next/head";
import Footer from "../components/Footer";
import MultiTab from "../components/MultiTab";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const faqTabData = {
  "About Us": [
    { question: "What is SourceMyGadgets?", answer: "a" },
    { question: "Do you sell both new and used gadgets?", answer: "a" },
    {
      question: "What is Source IT and how does it work?",
      answer: `Source IT is popularly used by customers who know what type of gadgets they want to buy and are looking for a trusted merchant they can buy from with ease, trust, and convenience.

    How it works-
    Simply fill a personalized questionnaire ( let the SourceIt link be here) with information about the gadget you want to buy.
    A follow-up email will be sent to you with the details of your order, price, and payment information. 
    Once completed, you can sit back and relax while we process your order and have it delivered to your doorstep.
    `,
    },
    { question: "How does “Get Recommendation” work?", answer: "a" },
    { question: "Do you provide your services to companies?", answer: "a" },
    { question: "What type of gadgets do you source for?", answer: "a" },
    { question: "How do you ensure standard and quality?", answer: "a" },
  ],
  "Charges and Payments": [
    { question: "Do you charge for recommendations?", answer: "a" },
    {
      question: "Are there any extra charges for using your services?",
      answer: "a",
    },
    {
      question: "How do I pay for the gadgets?",
      answer:
        "Payments are made to our company’s bank accounts through bank transfers or direct deposits",
    },
  ],
  Delivery: [
    {
      question: "Do you deliver?",
      answer: "a",
    },
    {
      question: "How long does it take to receive my order?",
      answer: "a",
    },
    {
      question: "Can I pay on delivery?",
      answer:
        "No, we are unable to accept payment on delivery. We require our customers to make payment before delivery. Alternatively, you can pick up from our physical location at Computer Village: His Grace Plaza, Francis Oremeji Street.",
    },
    {
      question: "Do you have a pickup location?",
      answer: "a",
    },
  ],
  "Help & Complaints": [
    {
      question: "What if I have complaints?",
      answer: "a",
    },
    {
      question: "How can I contact SourceMyGadgets if I need further help?",
      answer: "a",
    },
  ],
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>FAQs | Source It</title>
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
      <main className="max-w-7xl px-3 mx-auto">
        <h1
          style={{ color: "#212832", fontSize: "3.5rem" }}
          className="pt-40 font-bold mb-8"
        >
          FAQs
        </h1>
        <MultiTab TabData={faqTabData} />
        <div className="pb-36" />
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
}
