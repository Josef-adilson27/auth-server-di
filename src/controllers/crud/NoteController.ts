import { inject, injectable } from "inversify";
import { Request, Response } from "express";
import { TYPES } from "../../types.js";
import { NoteService } from "../../services/crud/NoteService.js";

@injectable()

export class NoteController {

  constructor(@inject(TYPES.NoteService) private noteService: NoteService){}

  async createNote(req: Request, res: Response) {
    res.send(await this.noteService.createNote('title','content'))
  }

  async deleteNote(req: Request, res: Response) {
    res.send(await this.noteService.deleteNote())
  }

  async getNotes(req: Request, res: Response) {
    res.send(await this.noteService.getNotes())
  }

  async updateNote(req: Request, res: Response) {
    res.send(await this.noteService.updateNote())
  }

}