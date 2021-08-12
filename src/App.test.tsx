import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("Shows Console Warning", () => {
  it("simulates typing using fireEvent.change", () => {
    render(<App />);

    const nameInput = screen.getByLabelText("Pokemon");
    fireEvent.change(nameInput, { target: { value: "squirtle" } });

    screen.getByText("Gotta catch 'em all");
  });

  it("simulates typing using synchronous userEvent.change", () => {
    render(<App />);

    const nameInput = screen.getByLabelText("Pokemon");

    userEvent.type(nameInput, "squirtle");

    screen.getByText("Gotta catch 'em all");
  });
});

describe("Does Not Show Console Warning", () => {
  it("simulates typing using fireEvent.change", async () => {
    render(<App />);

    const nameInput = screen.getByLabelText("Pokemon");
    await act(async () => {
      fireEvent.change(nameInput, { target: { value: "squirtle" } });
    });

    screen.getByText("Gotta catch 'em all");
  });

  it("simulates typing using synchronous userEvent.change", async () => {
    render(<App />);

    const nameInput = screen.getByLabelText("Pokemon");

    await act(async () => {
      userEvent.type(nameInput, "squirtle");
    });

    screen.getByText("Gotta catch 'em all");
  });

  it("simulates typing using async userEvent.change", async () => {
    render(<App />);

    const nameInput = screen.getByLabelText("Pokemon");
    // delay must be >0ms to get no act warnings
    await userEvent.type(nameInput, "squirtle", { delay: 0.5 });

    screen.getByText("Gotta catch 'em all");
  });
});

describe("Submit Form with console errors", () => {
  it("with fireEvent", async () => {
    render(<App />);

    const nameInput = screen.getByLabelText("Pokemon");
    await userEvent.type(nameInput, "squirtle", { delay: 0.5 });

    const submitButton = screen.getByText("Gotta catch 'em all");
    fireEvent.click(submitButton);
    await act(async () => {
      userEvent.click(submitButton);
    });
  });
  it("with userEvent.click", async () => {
    render(<App />);

    const nameInput = screen.getByLabelText("Pokemon");
    await userEvent.type(nameInput, "squirtle", { delay: 0.5 });

    const submitButton = screen.getByText("Gotta catch 'em all");
    userEvent.click(submitButton);
  });
});

describe("Submit Form without console errors", () => {
  it("with fireEvent", async () => {
    render(<App />);

    const nameInput = screen.getByLabelText("Pokemon");
    await userEvent.type(nameInput, "squirtle", { delay: 0.5 });

    const submitButton = screen.getByText("Gotta catch 'em all");
    await act(async () => {
      fireEvent.click(submitButton);
    });
  });
  it("with userEvent.click", async () => {
    render(<App />);

    const nameInput = screen.getByLabelText("Pokemon");
    await userEvent.type(nameInput, "squirtle", { delay: 0.5 });

    const submitButton = screen.getByText("Gotta catch 'em all");
    await act(async () => {
      userEvent.click(submitButton);
    });
  });
});
