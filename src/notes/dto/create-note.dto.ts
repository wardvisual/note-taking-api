import { Notes } from "../entities/notes.entity";

export interface CreateNote extends Omit<Notes, "id"> {}
