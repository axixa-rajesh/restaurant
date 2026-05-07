import express from "express";
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  patchCategory
} from "../controllers/categories.js";

const categoriesRouter = express.Router();

categoriesRouter.get("/", getCategories);

categoriesRouter.post("/", createCategory);

categoriesRouter.put("/:id", updateCategory);

categoriesRouter.delete("/:id", deleteCategory);

categoriesRouter.patch("/:id/status", patchCategory);

export default categoriesRouter;
