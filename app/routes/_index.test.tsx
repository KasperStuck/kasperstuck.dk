import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "./_index";

describe("Home Route", () => {
  it("renders the home page", () => {
    render(<Home />);
    expect(screen.getByText(/what's next/i)).toBeInTheDocument();
  });
});
