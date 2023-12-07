import axios from "axios";
import Contact from "../Entites/Contact";

const SERVER_URL: string = "http://localhost:8000";

export const getAllContacts = () => {
  const url: string = `${SERVER_URL}/contacts`;
  return axios.get(url);
};

export const getAllgroups = () => {
  const url: string = `${SERVER_URL}/groups`;
  return axios.get(url);
};

export const getContact = (contactId: string) => {
  const url: string = `${SERVER_URL}/contacts/${contactId}`;
  return axios.get(url);
};

export const deleteContact = (contactId: number) => {
  const url: string = `${SERVER_URL}/contacts/${contactId}`;
  return axios.delete(url);
};

export const updateContact = (contact: Contact, contactId: string) => {
  const url: string = `${SERVER_URL}/contacts/${contactId}`;
  return axios.put(url, contact);
};

export const createContacts = (contact: Contact) => {
  const url: string = `${SERVER_URL}/contacts`;
  return axios.post(url, contact);
};
