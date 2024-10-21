"use client";

import React, { useEffect, useState } from "react";
import { Paragraph, Title } from "../atoms/Typography";
import { AccordionItem } from "@/router";

export function Asked() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [displayQuestions, setDisplayQuestions] = useState([]);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Daftar pertanyaan dan jawaban
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

  useEffect(() => {
    const handleResize = () => {
      const isMobileScreen = window.innerWidth <= 768;
      setIsMobile(isMobileScreen);

      if (isMobileScreen) {
        setDisplayQuestions(questions.slice(0, 6));
      } else {
        setDisplayQuestions(questions);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container  pb-10 mx-auto flex flex-col px-5 md:px-0 gap-20">
      <div className="flex flex-col md:flex-row justify-between items-end">
        <div className="flex flex-col gap-[10px]">
          <Title level={3}>Frequently Asked Questions</Title>
          <Paragraph>
            Got questions? We've got answers! Check out our FAQ section to find
            answers to the most common questions about StreamVibe.
          </Paragraph>
        </div>
        <button className="px-6 py-4 bg-red-45 rounded-lg">
          Ask a Question
        </button>
      </div>

      <div className="gap-4  px-4 md:px-0 py-3 flex flex-wrap md:max-h-[470px] flex-col overflow-hidden">
        {displayQuestions.map((item, index) => (
          <AccordionItem
            key={index}
            index={index}
            question={item.question}
            answer={item.answer}
            activeIndex={activeIndex}
            handleToggle={handleToggle}
          />
        ))}
      </div>
    </div>
  );
}
