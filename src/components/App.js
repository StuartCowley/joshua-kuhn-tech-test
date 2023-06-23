import React, { useState } from "react";
import Search from "../components/Search";
import SearchResults from "./SearchResults";

import "../styles/app.css";

const App = () => {
  const [searchResults, setSearchResults] = useState();

  return (
    <div className="app">
      <img
        className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="nasaLogo"
      />
      <Search setSearchResults={setSearchResults} />
      <SearchResults />
    </div>
  );
};

export default App;
