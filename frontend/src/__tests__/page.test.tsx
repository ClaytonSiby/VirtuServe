import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import { describe, it, expect } from "@jest/globals";
import "@testing-library/jest-dom";

// Mock framer-motion to avoid test failures
jest.mock("framer-motion", () => ({
  motion: {
    div: "div",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    p: "p",
    button: "button",
    a: "a",
    span: "span",
    section: "section",
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
}));

describe("Home Page", () => {
  it("renders without crashing", () => {
    render(<Home />);
    expect(document.body).toBeInTheDocument();
  });
});
