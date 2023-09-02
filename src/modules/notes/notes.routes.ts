import { notesController } from "./notes.controllers";
import { Router } from "express";

export const NotesRoutes: Router = Router();

NotesRoutes.get("/", notesController.findAll);
NotesRoutes.post("/", notesController.create);
NotesRoutes.delete("/:id", notesController.remove);
NotesRoutes.patch("/:id", notesController.update);
