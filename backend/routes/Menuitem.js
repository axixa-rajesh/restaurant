import express from "express";
import {
  getmenuitem,
  createmenuitem,
  updatemenuiten,
  deletemenuitem,
} from "../controllers/MenuitemController.js";

const MenuitemRoutes = express.Router();

MenuitemRoutes.get("/", getmenuitem);

MenuitemRoutes.post("/", createmenuitem);

MenuitemRoutes.patch("/:id", updatemenuiten);

MenuitemRoutes.delete("/:id", deletemenuitem);

export default MenuitemRoutes;
