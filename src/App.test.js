import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  // Test case: rendering of the component
  it("should render without crashing", () => {
    render(<App />);
  });
});
