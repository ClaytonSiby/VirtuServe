import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import { describe, it, expect } from "@jest/globals";
import "@testing-library/jest-dom";

describe("Home Page", () => {
  it("renders the main heading", () => {
    render(<Home />);
    const heading = screen.getByText(/Elevate Your Business/i);
    expect(heading).toBeInTheDocument();
  });

  it("renders the subtitle", () => {
    render(<Home />);
    const subtitle = screen.getByText(/Premium virtual assistant services/i);
    expect(subtitle).toBeInTheDocument();
  });
});
