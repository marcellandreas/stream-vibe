import React from "react";
import { render, screen } from "@testing-library/react";
import { CardPlan } from "./CardPlan";

describe("CardPlan", () => {
  const mockProps = {
    title: "Premium Plan",
    description: "Access to the widest selection of movies and shows.",
    type: "month",
    price: 19.99,
  };

  it("renders the card plan with correct title, description, price, and type", () => {
    render(<CardPlan {...mockProps} />);

    // Check if the title is rendered
    expect(screen.getByRole("heading", { level: 4 })).toHaveTextContent(
      mockProps.title
    );

    // Check if the description is rendered
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();

    // Check if the price is rendered
    expect(screen.getByText(`$${mockProps.price}`)).toBeInTheDocument();

    // Check if the type is rendered
    expect(screen.getByText(`/${mockProps.type}`)).toBeInTheDocument();
  });

  it("renders buttons", () => {
    render(<CardPlan {...mockProps} />);

    // Check if "Start Free Trial" button is rendered
    expect(screen.getByText("Start Free Trial")).toBeInTheDocument();

    // Check if "Choose Plan" button is rendered
    expect(screen.getByText("Choose Plan")).toBeInTheDocument();
  });
});
