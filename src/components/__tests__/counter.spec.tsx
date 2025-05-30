import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Counter } from "../counter";

describe("Counter", () => {
  test("should init counter with zero", () => {
    render(<Counter initialCount={0} />);

    const value = screen.getByTestId("counterNumber").textContent;

    expect(value).toEqual("0");
  });
  test("should render the initial count", () => {
    render(<Counter initialCount={0} />);

    const countElement = document.querySelector("h1");
    expect(countElement).toBeInTheDocument();
  });

  test("should increment counter + 1", () => {
    render(<Counter initialCount={0} />);

    const buttonIncrement = screen.getByRole("button", { name: "Increment" });

    expect(buttonIncrement).toBeEnabled();

    fireEvent.click(buttonIncrement);

    expect(screen.getByTestId("counterNumber").textContent).toEqual("1");
  });

  test("should decrement counter - 1", () => {
    render(<Counter initialCount={0} />);

    const buttonDecrement = screen.getByRole("button", { name: "Decrement" });

    expect(buttonDecrement).toBeEnabled();

    fireEvent.click(buttonDecrement);

    expect(screen.getByTestId("counterNumber").textContent).toEqual("-1");
  });

  test("should restart counter", () => {
    render(<Counter initialCount={0} />);

    const buttonRestart = screen.getByRole("button", { name: "Restart" });

    expect(buttonRestart).toBeEnabled();

    fireEvent.click(buttonRestart);

    expect(screen.getByTestId("counterNumber").textContent).toEqual("0");
  });
});
