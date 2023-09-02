import { Request, Response } from "express";

import { CreateNote } from "./dto/create-note.dto";
import { notesService } from "./notes.service";
import { UpdateNote } from "./dto/update-note";

export class NotesController {
  async findAll(req: Request, res: Response): Promise<void> {
    const notes = await notesService.findAll();

    res.json(notes);
  }

  async create(req: Request, res: Response): Promise<void> {
    const note = await notesService.create(req.body as CreateNote);

    res.json(note);
  }

  async remove(req: Request, res: Response): Promise<void> {
    const note = await notesService.remove(req.query.id as string);

    res.json(note);
  }

  async update(req: Request, res: Response): Promise<void> {
    const note = await notesService.update(
      req.query.id as string,
      req.body as UpdateNote
    );

    res.json(note);
  }
}

export const notesController: NotesController = new NotesController();
