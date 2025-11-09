import { render, screen } from "@testing-library/react";
import DevComponent from "./DevComponent";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom/vitest";

// Mock fetchAllGigListings to avoid async side effects
// vi.mock("@/modules/data", () => ({
//   fetchAllGigListings: vi.fn(),
// }));

// describe("DevComponent", () => {
//   it("renders a button with the label 'This is a button by shadcn'", () => {
//     render(<DevComponent />);
//     expect(screen.getByText("This is a button by shadcn")).toBeInTheDocument();
//   });
// });
