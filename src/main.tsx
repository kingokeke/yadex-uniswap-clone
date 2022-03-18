import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.css";
import App from "./components/Layout/App";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Swap from "./components/Swap";
import Pool from "./components/Pool";
import Vote from "./components/Vote";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Navigate replace to="/swap" />} />
            <Route path="swap" element={<Swap />} />
            <Route path="pool" element={<Pool />} />
            <Route path="vote" element={<Vote />} />
          </Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
