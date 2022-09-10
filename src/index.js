import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UIContextProvider } from "./context/ui-context";

ReactDOM.render(
  <BrowserRouter>
    <UIContextProvider>
      <App />
    </UIContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
