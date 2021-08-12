import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("Show act console warning when changing input - fireEvent.change", () => {
  render(<App />);

  const nameInput = screen.getByLabelText("Pokemon");
  fireEvent.change(nameInput, { target: { value: "squirtle" } });

  const submitButton = screen.getAllByText("Gotta catch 'em all");
});

test("Show act console warning when changing input - synchronous userEvent.change", () => {
  render(<App />);

  const nameInput = screen.getByLabelText("Pokemon");
  userEvent.type(nameInput, "squirtle");

  const submitButton = screen.getAllByText("Gotta catch 'em all");
});

test("Does NOT show act warning  -  async userEvent.change", async () => {
  render(<App />);

  const nameInput = screen.getByLabelText("Pokemon");
  await userEvent.type(nameInput, "squirtle", { delay: 10 });

  const submitButton = screen.getAllByText("Gotta catch 'em all");
});
