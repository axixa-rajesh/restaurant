import express from "express"
import {getTable, createTable, updateTable, deleteTable} from "../controllers/TableController.js"

const TableRoutes = express.Router();

TableRoutes.get('/', getTable)

TableRoutes.post('/', createTable)

TableRoutes.patch('/:id', updateTable)

TableRoutes.delete('/:id', deleteTable)

export default TableRoutes