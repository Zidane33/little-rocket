import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

describe("test rendering of components", () => {
  test("renders header", () => {
    const { getByText } = render(<App />);
    const amountNeeded = getByText("$500 still needed for this project");
    expect(amountNeeded).toBeInTheDocument();
  });

  test("renders main container copy", () => {
    const { getByText } = render(<App />);
    const copy = getByText(
      "Join the other donors who have already supported this project. Every dollar helps."
    );
    expect(copy).toBeInTheDocument();
  });

  test("renders input", () => {
    const { getByDisplayValue } = render(<App />);
    const input = getByDisplayValue("50");
    expect(input).toBeInTheDocument();
  });
});

describe("test events", () => {
  test("donate button subtracts $50 from amount needed and increases donors by one", () => {
    const { getByText } = render(<App />);
    const amountNeeded = getByText("$500 still needed for this project");
    const donors = getByText("42");
    fireEvent.click(getByText("Give Now"));
    expect(amountNeeded).toHaveTextContent(
      "$450 still needed for this project"
    );
    expect(donors).toHaveTextContent("43");
  });

  test("donate button subtracts $50 twice from amount needed and increases donors by two", () => {
    const { getByText } = render(<App />);
    const amountNeeded = getByText("$500 still needed for this project");
    const donors = getByText("42");
    fireEvent.click(getByText("Give Now"));
    expect(amountNeeded).toHaveTextContent(
      "$450 still needed for this project"
    );
    expect(donors).toHaveTextContent("43");
    fireEvent.click(getByText("Give Now"));
    expect(amountNeeded).toHaveTextContent(
      "$400 still needed for this project"
    );
    expect(donors).toHaveTextContent("44");
  });

  test("donate button subtracts $100 from amount needed and increases donors by one", () => {
    const { getByText, getByDisplayValue } = render(<App />);
    const amountNeeded = getByText("$500 still needed for this project");
    const donors = getByText("42");
    const input = getByDisplayValue("50");
    fireEvent.change(input, { target: { value: 100 } });
    fireEvent.click(getByText("Give Now"));
    expect(amountNeeded).toHaveTextContent(
      "$400 still needed for this project"
    );
    expect(donors).toHaveTextContent("43");
  });
});
