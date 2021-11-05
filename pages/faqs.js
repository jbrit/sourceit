import Head from "next/head";
import Footer from "../components/Footer";
import MultiTab from "../components/MultiTab";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const faqTabData = {
  "About Us": [
    {
      question: "What is SourceMyGadgets?",
      answer:
        "SourceMyGadgets provides you with personalized services and solutions that aid your gadget purchasing decisions and improve your standard of living. \nWe are a personalized digital platform that cares about your gadget needs.",
    },
    {
      question: "Do you sell both new and used gadgets?",
      answer: "Yes, We sell both brand new and foreign used/pre-owned gadgets",
    },
    {
      question: "What is Order Now and how does it work?",
      answer: `Order Now is popularly used by customers who know what type of gadgets they want to buy and are looking for a trusted merchant they can buy from with ease, trust, and convenience.

    How it works-
    Simply fill a personalized questionnaire ( let the SourceIt link be here) with information about the gadget you want to buy.
    A follow-up email will be sent to you with the details of your order, price, and payment information. 
    Once completed, you can sit back and relax while we process your order and have it delivered to your doorstep.
    `,
    },
    {
      question: "How does “Get Recommendation” work?",
      answer:
        "- Fill a personalized questionnaire (Let the recommendation link be here)  \
        information that will enable us better understand your needs. \
        - A follow-up email will be sent with our top recommendations for you. \
        - Proceed to request for us to “Source It” for you.",
    },
    {
      question: "Do you provide your services to companies?",
      answer:
        "We have both individual and corporate clients who use us to meet their gadgets’ needs.",
    },
    {
      question: "What type of gadgets do you source for?",
      answer:
        "We source for all kinds of gadgets across different categories. The list includes but is not limited to phones, laptops, mobile accessories, laptop accessories, wearables, consoles,  office setups, and many more.",
    },
    {
      question: "How do you ensure standard and quality?",
      answer:
        "Every gadget you buy through us has been tested for quality and standard. Our Quality Assurance team ensures that your gadget meets all the quality requirements before we deliver it to you.",
    },
  ],
  "Charges and Payments": [
    {
      question: "Do you charge for recommendations?",
      answer:
        "No, our recommendation service is 100% free. You will get a recommendation that fits your needs from our gadget expert free of charge.",
    },
    {
      question: "Are there any extra charges for using your services?",
      answer: "No, there are no extra charges.",
    },
    {
      question: "How do I pay for the gadgets?",
      answer:
        "Payments are made to our company’s bank accounts through bank transfers or direct deposits.",
    },
  ],
  Delivery: [
    {
      question: "Do you deliver?",
      answer:
        "Yes, we deliver to you at your doorstep. 90% of our customers use our delivery service as it is convenient and saves them the time for other important activities.",
    },
    {
      question: "How long does it take to receive my order?",
      answer:
        "For orders within Lagos, we deliver same day. For Outside Lagos orders, we deliver within 24hrs to 72hrs",
    },
    {
      question: "Can I pay on delivery?",
      answer:
        "No, we are unable to accept payment on delivery. We require our customers to make payment before delivery. Alternatively, you can pick up from our physical location at Computer Village: His Grace Plaza, Francis Oremeji Street.",
    },
    {
      question: "Do you have a pickup location?",
      answer:
        "Yes, we do. Our Pickup Location is at Computer Village: His Grace Plaza, Francis Oremeji Street.",
    },
  ],
  "Help & Complaints": [
    {
      question: "What if I have complaints?",
      answer:
        "We take our customer complaints seriously. If you have a complaint, please reach out via the contact us form. Our team will provide a solution that resolves your complaints ASAP.",
    },
    {
      question: "How can I contact SourceMyGadgets if I need further help?",
      answer:
        "If you need any help, please fill out the contact us form. It takes a couple of hours for us to get back to you",
    },
  ],
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>FAQs | Order Now</title>
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
