import express from "express"
import {
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/CategoryController.js";

const CategoryRoutes = express.Router();

CategoryRoutes.get("/", getCategory);

CategoryRoutes.post("/", createCategory);

CategoryRoutes.patch("/:id", updateCategory);

CategoryRoutes.delete("/:id", deleteCategory);

export default CategoryRoutes