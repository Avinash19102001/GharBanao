import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import routes from "./routes/AppRouter.jsx";
import HouseOwnerProfile from "./components/auth/HouseOwnerProfile.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <RouterProvider router={routes} /> */}
    <HouseOwnerProfile />
  </StrictMode>,
);
