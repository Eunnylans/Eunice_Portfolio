import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
// import "./Translation/i18n";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Suspense fallback={null}>
        <App />
      </Suspense>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
