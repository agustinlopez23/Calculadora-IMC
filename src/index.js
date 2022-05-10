import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import "./assets/css/App.css";
import "./assets/css/Input.css";

import App from "./container/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
