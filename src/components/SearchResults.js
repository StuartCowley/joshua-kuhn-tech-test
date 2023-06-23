import React from "react";

import "../styles/search-results.css";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p>No results found!</p>;
  } else {
    return (
      <div className="image-container">
        {results.map((image, index) => (
          <img
            key={index}
            className="space-image"
            src={image}
            alt="spaceImage"
          />
        ))}
      </div>
    );
  }
};

export default SearchResults;
