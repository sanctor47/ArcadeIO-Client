import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProvideAuth } from "./Hooks/useUserAuth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ProvideAuth> */}
        <App />
      {/* </ProvideAuth> */}
    </BrowserRouter>
  </React.StrictMode>
);
