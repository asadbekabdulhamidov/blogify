import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

//rrd
import { RouterProvider } from "react-router-dom";
import routes from "./routes/index.tsx";

import { AuthProvider } from "./context/AuthContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  </StrictMode>,
);
