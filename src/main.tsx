import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Wallet } from "./Wallet";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Wallet>
      <App />
    </Wallet>
  </React.StrictMode>
);
