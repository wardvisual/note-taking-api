import { Repository } from "typeorm";
import { ObjectId } from "mongodb";

import { getDataSource } from "@/astronautaking-api/database";
import { APIResponse } from "@/astronautaking-api/types";
import { CreateNote } from "./dto/create-note.dto";
import { Notes } from "./entities/notes.entity";
import { UpdateNote } from "./dto/update-note";

export class NotesService {
  private noteRepositoryPromise: Promise<Repository<Notes>>;

  constructor() {
    this.noteRepositoryPromise = getDataSource().then((dataSource) =>
      dataSource.getRepository(Notes)
    );
  }

  async findAll(): Promise<APIResponse<Notes[]>> {
    const notesRepository = await this.noteRepositoryPromise;

    const notes = await notesRepository.find();

    return {
      isSuccess: true,
      message: "Notes found",
      data: notes,
    } as APIResponse<Notes[]>;
  }

  async create(note: CreateNote): Promise<APIResponse<Notes>> {
    const notesRepository = await this.noteRepositoryPromise;

    const newNote = notesRepository.create(note);

    return {
      isSuccess: true,
      message: "Note created",
      data: newNote,
    } as APIResponse<Notes>;
  }

  async remove(id: string): Promise<APIResponse<Notes>> {
    const notesRepository = await this.noteRepositoryPromise;

    const noteToRemove = await notesRepository.findOne({
      where: { id: id as unknown as ObjectId },
    });

    if (!noteToRemove)
      return {
        isSuccess: false,
        message: "Note not found",
      } satisfies APIResponse;

    const removedNote = await notesRepository.remove(noteToRemove);

    return {
      isSuccess: true,
      message: "Note removed",
      data: removedNote,
    } as APIResponse<Notes>;
  }

  async update(id: string, note: UpdateNote): Promise<APIResponse<Notes>> {
    const notesRepository = await this.noteRepositoryPromise;

    const noteToUpdate = await notesRepository.findOne({
      where: { id: id as unknown as ObjectId },
    });

    if (!noteToUpdate)
      return {
        isSuccess: false,
        message: "Note not found",
      } satisfies APIResponse;

    Object.assign(noteToUpdate, note);

    const updatedNote = await notesRepository.save(noteToUpdate);

    return {
      isSuccess: true,
      message: "Note updated",
      data: updatedNote,
    } as APIResponse<Notes>;
  }
}

export const notesService = new NotesService();
