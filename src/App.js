import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { Navbar } from "./components";
import Home from "./pages/Home";

function App() {
  const [searchTerms, setSearchTerms] = useState('');
  return (
    <>
      <Navbar setSearchTerms={setSearchTerms} />
      <Home searchTerms={searchTerms} />
      <ToastContainer  />
    </>
  );
}

export default App;
