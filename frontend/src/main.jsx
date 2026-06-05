import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import routes from "./routes/AppRouter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense>
      <RouterProvider router={routes} />
    </Suspense>
  </StrictMode>,
);
