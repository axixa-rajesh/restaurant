import express from "express"
import {getCategories, createCategories, updateCategories, deleteCategories} from "../controllers/CategoriesController.js"

const CategoriesRoutes = express.Router();

CategoriesRoutes.get('/', getCategories)

CategoriesRoutes.post('/', createCategories)

CategoriesRoutes.patch('/:id', updateCategories)

CategoriesRoutes.delete('/:id', deleteCategories)

export default CategoriesRoutes