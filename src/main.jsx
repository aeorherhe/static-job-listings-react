import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./css/styles.css";
import { MyProfile } from "./components/others/MyProfile.jsx";
import { createPortal } from "react-dom";
import { GlobalContextProvider } from "./services/GlobalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <App />
      {createPortal(<MyProfile />, document.body)}
    </GlobalContextProvider>
  </React.StrictMode>
);
