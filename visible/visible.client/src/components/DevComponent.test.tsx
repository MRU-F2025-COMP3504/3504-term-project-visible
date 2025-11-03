import { render, screen } from "@testing-library/react";
import DevComponent from "./DevComponent";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("DevComponent", () => {
  it("renders a button with the label 'This is a button by shadcn'", () => {
    render(<DevComponent />);
    expect(screen.getByText("This is a button by shadcn")).toBeInTheDocument();
  });
});
