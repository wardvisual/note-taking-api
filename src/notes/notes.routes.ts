import { notesController } from "./notes.controllers";
import { Router } from "express";

export const NotesRoutes: Router = Router();

NotesRoutes.get("/", notesController.findAll);
NotesRoutes.post("/", notesController.create);
NotesRoutes.post("/:id", notesController.remove);
NotesRoutes.post("/:id", notesController.update);
