import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import "../../vendor/Style.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App__background-wrapper">
        <Header />
        <About />
      </div>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
