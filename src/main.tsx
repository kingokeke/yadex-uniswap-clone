import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.css";
import App from "./components/Layout/App";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Swap from "./pages/Swap";
import Pool from "./pages/Pool";
import Vote from "./pages/Vote";
import { RecoilRoot } from "recoil";
import { MoralisProvider } from "react-moralis";

const serverUrl = "https://mezeclf4wcu8.usemoralis.com:2053/server";
const appId = "N8pTlgx0Fl4sd9iw6L3iZ2KF8DQPyzeF3YTVUbf1";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <MoralisProvider serverUrl={serverUrl} appId={appId}>
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
      </MoralisProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
