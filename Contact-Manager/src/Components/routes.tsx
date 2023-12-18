import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ContactInfo from "../Pages/ContactInfo";
import AddContact from "../Pages/AddContact";
import EditContact from "../Pages/EditContact";

const routes = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/contacts/contactInfo/:id", element: <ContactInfo /> },
  { path: "/contacts/add", element: <AddContact /> },
  { path: "/contacts/contactEdit/:id", element: <EditContact /> },
]);

export default routes;
