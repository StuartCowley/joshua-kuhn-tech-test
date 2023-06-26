import React from "react";
import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<SearchResults results={[]} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders 'No results found!' when results array is empty", () => {
    render(<SearchResults results={[]} />);

    expect(screen.getByText("No results found!")).toBeInTheDocument();
  });

  it("renders image container and images when results array is not empty", () => {
    const results = ["image1.jpg", "image2.jpg", "image3.jpg"];

    render(<SearchResults results={results} />);

    const imageContainer = screen.getByTestId("image-container");
    const images = screen.getAllByRole("img", { name: "spaceImage" });

    expect(imageContainer).toBeInTheDocument();
    expect(images.length).toBe(results.length);

    images.forEach((image, index) => {
      expect(image.src).toContain(results[index]);
      expect(image.alt).toBe("spaceImage");
    });
  });
});
