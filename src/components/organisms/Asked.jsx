"use client";

import React, { useState } from "react";
import { Paragraph, TextButton, Title } from "../atoms/Typography";

export function Asked() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const questions = [
    {
      question: "What is StreamVibe?",
      answer:
        "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    },
    {
      question: "How much does StreamVibe cost?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium velit, ipsum unde ",
    },
    {
      question: "What content is available on StreamVibe?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium velit, ipsum unde ",
    },
    {
      question: "How can I watch StreamVibe?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium velit, ipsum unde ",
    },
    {
      question: "How do I sign up for StreamVibe?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium velit, ipsum unde ",
    },
    {
      question: "What is the StreamVibe free trial?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium velit, ipsum unde ",
    },
    {
      question: "How do I contact StreamVibe customer support?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium velit, ipsum unde ",
    },
    {
      question: "What are the StreamVibe payment methods?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium velit, ipsum unde ",
    },
  ];

  return (
    <div className=" container pb-10 mx-auto flex  flex-col gap-20">
      <div className="flex flex-col md:flex-row justify-between items-end">
        <div className="flex flex-col gap-[10px] ">
          <Title level={3}>Frequently Asked Questions</Title>
          <Paragraph>
            Got questions? We've got answers! Check out our FAQ section to find
            answers to the most common questions about StreamVibe.
          </Paragraph>
        </div>
        <button className=" px-6 py-4 bg-red-45 rounded-lg ">
          Ask a Question
        </button>
      </div>

      <div className="gap-4 px-4 md:px-0 py-3 flex flex-wrap md:max-h-[470px] flex-col overflow-hidden ">
        {questions.map((item, index) => (
          <div key={index} className="md:w-1/2 min-h-[80px] ">
            <div className="flex justify-center gap-4 ">
              <button className=" bg-black-12 border border-black-15 h-16 w-16 rounded-xl">
                {index + 1}
              </button>
              <button
                onClick={() => handleToggle(index)}
                className="w-full text-left py-4 px-2 flex justify-between items-center   transition-colors duration-200"
              >
                <span className="font-semibold text-lg">{item.question}</span>
              </button>
              <div
                onClick={() => handleToggle(index)}
                className=" cursor-pointer text-d-h4 h-16 w-16  text-white grid place-content-center"
              >
                {activeIndex === index ? "-" : "+"}
              </div>
            </div>
            {activeIndex === index && (
              <div className="pl-20 py-6 text-gray-700">
                <p>{item.answer}</p>
              </div>
            )}
            <div className="line" />
          </div>
        ))}
      </div>
    </div>
  );
}
