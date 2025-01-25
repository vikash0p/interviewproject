'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import JavaScriptLogicalNavigation from "../JavaScriptComponents/JavaScriptHelperComponents/JavaScriptLogicalNavigation";


interface AccordionItem {
  title: string;
  content: string;
  component?: React.FC;
}

  const accordionData: AccordionItem[] = [
    {
      title: "JavaScript Interview Questions",
      content: "Here are some frequently asked JavaScript interview questions.",
    },
    {
      title: "JavaScript Logical Interview Questions",
      content: "Here are some JavaScript coding challenges for interviews.",
      component: JavaScriptLogicalNavigation,
    },
  ];

const Accordion: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="min-h-screen sticky top-0  text-gray-300 flex  justify-center">
      <div className="w-full max-w-3xl mx-auto ">
        {accordionData.map((item, index) => (
          <div key={index} className="border-b border-b-gray-200">
            <div
              className="flex justify-between items-center bg-gray-800 py-4 px-2 cursor-pointer hover:bg-gray-700 transition-transform duration-300"
              onClick={() => toggleAccordion(index)}
            >
              <h2 className="text-lg ">{item.title}</h2>
              <motion.div
                animate={{
                  rotate: open === index ? 360 : 0, // Determines icon rotation
                  scale: open === index ? 1.2 : 1, // Slightly enlarges the active icon
                }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                {open === index ? (
                  <FaChevronUp className="text-xl" /> // Displays up arrow
                ) : (
                  <FaChevronDown className="text-xl" /> // Displays down arrow
                )}
              </motion.div>
            </div>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: open === index ? "auto" : 0,
                opacity: open === index ? 1 : 0,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="overflow-hidden"
            >
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{
                  y: open === index ? 0 : 10,
                  opacity: open === index ? 1 : 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: open === index ? 0.2 : 0,
                }}
                className="px-2 py-4 bg-gray-900 rounded-b-lg"
              >
                <div>
                  {item.component
                    ? React.createElement(item.component)
                    : item.content}
                </div>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
