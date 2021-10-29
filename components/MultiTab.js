import { Tab } from "@headlessui/react";
import { useState } from "react";
import Image from "next/image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function MultiTab({ TabData }) {
  const [expanded, setExpanded] = useState(null);
  const expandTab = (question) => {
    setExpanded(question);
  };
  const closeTab = () => setExpanded(null);
  return (
    <Tab.Group>
      <Tab.List className="flex py-7 bg-white mb-8">
        {Object.keys(TabData).map((tabName) => (
          <Tab
            className={({ selected }) =>
              classNames(
                "font-medium text-xl flex items-center justify-center",
                selected ? "text-blue-400 selected-tab" : "opacity-50"
              )
            }
            style={{ flex: "1 0 auto" }}
            key={tabName}
          >
            <span className="relative">
              {tabName}
              <span
                style={{
                  height: "0.3125rem",
                  bottom: "-0.7rem",
                  width: "80%",
                  left: 0,
                  borderRadius: "50vw",
                }}
                className="absolute block bg-blue-400 tab-base"
              ></span>
            </span>
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {Object.values(TabData).map((tabValue, idx) => (
          <Tab.Panel key={idx}>
            {tabValue.map((faq, idx) => (
              <div
                className="p-12 mb-7 bg-white font-bold text-3xl cursor-pointer select-none"
                style={{ color: "#4D4D4D" }}
                key={idx}
                onClick={() =>
                  expanded === faq.question
                    ? closeTab()
                    : expandTab(faq.question)
                }
              >
                <div className="w-full flex items-center">
                  <span>{faq.question}</span>
                  <span className="ml-auto"></span>
                  <span
                    className={classNames(
                      "select-none",
                      expanded === faq.question ? "transform rotate-90" : ""
                    )}
                  >
                    <Image
                      className="ml-auto"
                      src="/caret-right.svg"
                      height={24}
                      width={24}
                    />
                  </span>
                </div>
                <div
                  className={classNames(
                    expanded === faq.question
                      ? "block mt-4 font-normal text-lg"
                      : "hidden"
                  )}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}

export default MultiTab;
