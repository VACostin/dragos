import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./default.css";
import RouterApp from "./routerApp";
/* eslint-disable react/function-component-definition */

const container = document.body;
createRoot(container).render(
  <React.StrictMode>
    <RouterApp />
  </React.StrictMode>
);
