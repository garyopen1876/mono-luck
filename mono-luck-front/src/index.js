import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Page/Home";
import RegisterPage from "./Page/RegisterPage";
import SearchPage from "./Page/SearchPage";
import FinishPage from "./Page/RegisterFinishPage";
import SearchPageWait from "./Page/SearchPageWait";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import MenuBar from "./Components/MenuBar";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MenuBar />
      <Routes>
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/SearchPage" element={<SearchPage />} />
        <Route path="/RegisterFinishPage" element={<FinishPage />} />
        <Route path="/SearchPageWait" element={<SearchPageWait />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
reportWebVitals();
