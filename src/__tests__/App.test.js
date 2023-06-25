import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the NASA logo correctly", () => {
    render(<App />);

    const nasaLogo = screen.getByAltText("nasaLogo");

    expect(nasaLogo).toBeInTheDocument();
    expect(nasaLogo).toHaveAttribute(
      "src",
      "https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
    );
  });

  it("renders the Search component", () => {
    render(<App />);

    expect(screen.getByTestId("search-component")).toBeInTheDocument();
  });

  it("displays no results upon app start", () => {
    render(<App />);

    expect(screen.getByText("No results found!")).toBeInTheDocument();
  });
});
