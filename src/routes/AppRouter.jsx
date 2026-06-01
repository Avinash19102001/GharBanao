import { createBrowserRouter } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";

const routes=createBrowserRouter([
    ...AuthRoutes
])
export default routes