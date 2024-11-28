import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <Note className = "note" />
      <Footer />
    </div>
  );
}

export default App;
