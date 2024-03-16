import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import Root from "./Root";
import "./index.css";

ReactDOM.hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <React.StrictMode>
    <Router>
      <Root />
    </Router>
  </React.StrictMode>
);
