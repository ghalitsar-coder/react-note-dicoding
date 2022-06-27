import React from "react";

const Navbar = ({ setSearchTerms }) => {
  return (
    <nav className="flex flex-col gap-3  md:flex-row justify-between items-center p-4 bg-indigo-900">
      <h1 className="font-semibold text-white">REACT-NOTE</h1>
      <div className="flex items-center gap-x-3">
        <h2 className="font-semibold text-white">Search for note</h2>
        <input
          type="text"
          className="border p-1 rounded-md shadow-lg placeholder:p-1"
          placeholder="One piece..."
          onChange={(e) => setSearchTerms(e.target.value)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
