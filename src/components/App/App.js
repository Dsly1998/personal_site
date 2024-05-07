import React, { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import PopupContact from "../PopupContact/PopupContact";
import "../../vendor/Style.css";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <div className="App__background-wrapper">
        <Header openModal={openModal} />
        <About />
      </div>
      <Main />
      <Footer />
      {isModalOpen && <PopupContact onClose={closeModal} />}
    </div>
  );
}

export default App;
