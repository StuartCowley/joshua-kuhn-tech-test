import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Search />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("button exists", () => {
    render(<Search />);

    const searchButton = screen.getByRole("button", { name: /Search/i });

    expect(searchButton).toBeInTheDocument();
  });

  it("updates input value correctly", () => {
    render(<Search setSearchResults={() => {}} />);

    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "test" } });

    expect(input.value).toBe("test");
  });
});
