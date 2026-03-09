import React from "react";
import ReactDOM from "react-dom/client";

import LilWudWeb from "@/index";
import "@/styles/app.css";
import type { LilWudPublicState } from "@/types/app";

const publicState = window.__LIL_WUD_PUBLIC_STATE__ as
  | LilWudPublicState
  | undefined;

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <LilWudWeb config={publicState?.config} />
  </React.StrictMode>,
);
