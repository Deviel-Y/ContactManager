import { Group } from "../Entites/Group";
import create from "./ali-client";

export default create<Group>("/groups");
