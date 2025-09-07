import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./vendor/Style.css";
import "./components/About/About.css";
import "./components/Main/Main.css";
import "./pages/Home.css";
import "./pages/Projects.css";
import "./components/App/App.css";
import "./components/Header/Header.css";
import "./components/Footer/Footer.css";
import "./components/PopupContact/PopupContact.css";
import App from "./components/App/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);