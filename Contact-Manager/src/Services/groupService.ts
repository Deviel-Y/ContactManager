import { Group } from "../Entites/Group";
import APIClient from "./ali-client";

export default new APIClient<Group[]>("/groups");
