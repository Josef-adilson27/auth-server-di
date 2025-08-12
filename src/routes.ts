import { Router } from "express";
import "reflect-metadata";
import {
  loginController,
  logoutController,
  noteController,
  profileController,
  reigsterController,
} from "./container.js";

export const route = Router();

//auth
route.get("/profile", (req, res) => profileController.profile(req, res));
route.post("/login", (req, res) => loginController.login(req, res));
route.post("/register", (req, res) => reigsterController.register(req, res));
route.post("/logout", (req, res) => logoutController.logout(req, res));
//notes
route.get("/notes", (req, res) => noteController.getNotes(req, res));
route.post("/notes", (req, res) => noteController.createNote(req, res));
route.put("/notes/:id", (req, res) => noteController.updateNote(req, res));
route.delete("/notes/:id", (req, res) => noteController.deleteNote(req, res));
