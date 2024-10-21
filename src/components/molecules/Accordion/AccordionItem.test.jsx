import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { AccordionItem } from "./AccordionItem";

describe("AccordionItem", () => {
  const mockProps = {
    index: 0,
    question: "What is your return policy?",
    answer: "You can return any item within 30 days.",
    activeIndex: 0,
    handleToggle: jest.fn(),
  };

  it("renders the question and answer correctly", () => {
    render(<AccordionItem {...mockProps} />);

    // Check if the question is rendered
    expect(screen.getByText(mockProps.question)).toBeInTheDocument();

    // Check if the answer is rendered
    expect(screen.getByText(mockProps.answer)).toBeInTheDocument();
  });

  it("calls handleToggle when clicked", () => {
    render(<AccordionItem {...mockProps} />);

    const toggleButton = screen.getByText(mockProps.question);
    fireEvent.click(toggleButton);

    // Check if handleToggle was called
    expect(mockProps.handleToggle).toHaveBeenCalledWith(mockProps.index);
  });

  it("displays the answer when activeIndex matches index", () => {
    render(<AccordionItem {...mockProps} />);

    // Check if the answer is displayed when active
    expect(screen.getByText(mockProps.answer)).toBeVisible();
  });
});
