import { Request, Response } from "express";

import { APIResponse } from "@/astronautaking-api/types";
import { CreateNote } from "./dto/create-note.dto";
import { Notes } from "./entities/notes.entity";
import { notesService } from "./notes.service";
import { UpdateNote } from "./dto/update-note";

export class NotesController {
  async findAll(req: Request, res: Response): Promise<APIResponse<Notes[]>> {
    const notes = await notesService.findAll();

    return notes;
  }

  async create(req: Request, res: Response): Promise<APIResponse<Notes>> {
    const note = await notesService.create(req.body as CreateNote);

    return note;
  }

  async remove(req: Request, res: Response): Promise<APIResponse<Notes>> {
    const note = await notesService.remove(req.params.id);

    return note;
  }

  async update(req: Request, res: Response): Promise<APIResponse<Notes>> {
    const note = await notesService.update(
      req.params.id,
      req.body as UpdateNote
    );

    return note;
  }
}

export const notesController: NotesController = new NotesController();
