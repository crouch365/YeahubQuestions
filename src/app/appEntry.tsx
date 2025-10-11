import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import BaseLayout from "./layouts/BaseLayout";
import "@/app/styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BaseLayout />
  </StrictMode>
);
