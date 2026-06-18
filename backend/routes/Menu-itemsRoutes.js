import express from "express"
import {getMenuitems, createMenuitems, updateMenuitems, deleteMenuitems} from "../controllers/Menu-itemsController.js"

const MenuitemsRoutes = express.Router();

MenuitemsRoutes.get('/', getMenuitems)

MenuitemsRoutes.post('/', createMenuitems)

MenuitemsRoutes.patch('/:id', updateMenuitems)

MenuitemsRoutes.delete('/:id', deleteMenuitems)

export default MenuitemsRoutes