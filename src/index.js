import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./Styles/globalStyles";
import App from "./Components/App";
import Profile from "./Components/Profile";
import Repositories from "./Components/Repositories";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App>
      <Profile />
      <Repositories />
    </App>
  </React.StrictMode>
);
