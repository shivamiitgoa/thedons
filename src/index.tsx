import React from "react";
import ReactDOM from "react-dom";
import "./userCSS.css";
import App from "./App";
import { AppProvider } from "./state/app";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
