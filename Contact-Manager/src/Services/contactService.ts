import Contact from "../Entites/Contact";
import APIClient from "./ali-client";

export default new APIClient<Contact[]>("/contacts");
