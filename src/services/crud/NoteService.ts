import { injectable } from "inversify";

@injectable()
export class NoteService {

  async createNote(title: string, content: string) {
    return "succes cretated note";
  }

  async deleteNote() {
    return "succes delete note";
  }

  async getNotes() {
    return "succes get notes";
  }

  async updateNote() {
    return "succes updated  note";
  }
  
}
