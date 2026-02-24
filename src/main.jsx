import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";
import { FinanceProvider } from "./context/FinanceContext.jsx";
import UserProvider from "./context/UserContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <FinanceProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </FinanceProvider>
    </HashRouter>
  </React.StrictMode>
);