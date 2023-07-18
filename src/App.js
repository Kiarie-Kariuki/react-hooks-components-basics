import React from "react";
import Article from "./Article";
import Comment from "./Comment";
import Navbar from "./Navbar"
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <Article />
      <Comment />
      <Footer/>
    </div>
  );
}

export default App;
