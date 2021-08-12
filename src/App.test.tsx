import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("Shows Console Warning", () => {
  it("simulates typing using fireEvent.change", () => {
    render(<App />);

    const nameInput = screen.getByLabelText("Pokemon");
    fireEvent.change(nameInput, { target: { value: "squirtle" } });

    screen.getAllByText("Gotta catch 'em all");
  });

  it("simulates typing using synchronous userEvent.change", () => {
    render(<App />);

    const nameInput = screen.getByLabelText("Pokemon");

    userEvent.type(nameInput, "squirtle");

    screen.getAllByText("Gotta catch 'em all");
  });
});

describe("Does Not Show Console Warning", () => {
  it("simulates typing using fireEvent.change", async () => {
    render(<App />);

    const nameInput = screen.getByLabelText("Pokemon");
    await act(async () => {
      fireEvent.change(nameInput, { target: { value: "squirtle" } });
    });

    screen.getAllByText("Gotta catch 'em all");
  });

  it("simulates typing using synchronous userEvent.change", async () => {
    render(<App />);

    const nameInput = screen.getByLabelText("Pokemon");

    await act(async () => {
      userEvent.type(nameInput, "squirtle");
    });

    screen.getAllByText("Gotta catch 'em all");
  });

  it("simulates typing using async userEvent.change", async () => {
    render(<App />);

    const nameInput = screen.getByLabelText("Pokemon");
    // delay must be >0ms to get no act warnings
    await userEvent.type(nameInput, "squirtle", { delay: 0.5 });

    screen.getAllByText("Gotta catch 'em all");
  });
});
