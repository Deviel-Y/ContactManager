import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ContactInfo from "../Pages/ContactInfo";
import AddContact from "../Pages/AddContact";

const routes = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/contacts/:id", element: <ContactInfo /> },
  { path: "/contacts/add", element: <AddContact /> },
]);

export default routes;
