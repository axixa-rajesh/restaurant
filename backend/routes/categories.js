import express from "express";
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categories.js";

const categoriesRouter = express.Router();

categoriesRouter.get("/", getCategories);

categoriesRouter.post("/", createCategory);

categoriesRouter.put("/:id", updateCategory);

categoriesRouter.delete("/:id", deleteCategory);

export default categoriesRouter;
