import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ContactInfo from "./ContactInfo";

const routes = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/contacts/:id", element: <ContactInfo /> },
]);

export default routes;
