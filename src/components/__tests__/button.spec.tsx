import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Button } from "../Button";

describe("Button", () => {
  test("should render a button with default text", () => {
    render(<Button label="Clique-me" />);
    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("Clique-me");
  });
  test("should disable button", () => {
    render(<Button disabled />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });
});
