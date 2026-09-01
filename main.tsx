import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ConverterPage } from "@/components/ConverterPage";
import "@/styles/globals.css";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="bg-slate-100 text-slate-900 antialiased min-h-screen">
        <Routes>
          <Route path="/" element={<ConverterPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
);
