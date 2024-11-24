import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import store from "./store/store.jsx";
import { Provider } from "react-redux";
import React from "react";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.Fragment>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.Fragment>
  </Provider>
);
