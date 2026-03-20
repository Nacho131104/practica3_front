"use client";
import React, { useState } from "react";
import "../page.css";

type params = {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar = ({ setSearchQuery }: params) => {
  const [input, setInput] = useState<string>("");

  const ejecutarBusqueda = () => {
    setSearchQuery(input);
  };

  return (
    <div className="search-wrapper">
      <input
        type="text"
        className="search-input"
        placeholder="Buscar producto..."
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="search-btn" onClick={ejecutarBusqueda}>
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;