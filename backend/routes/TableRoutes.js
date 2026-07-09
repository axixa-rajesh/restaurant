            import express from "express"
            import {getTable, createTable, updateTable, deleteTable , updateTableStatus} from "../controllers/TableController.js"
            import {getCategory , createCategory , updateCategory , updateCategoryStatus} from "../controllers/CategoryController.js"
            import{getMenuItems , createMenuItems , updateMenuItems , updateMenuItemsStatus} from "../controllers/MenuItemsControllers.js"
            const TableRoutes = express.Router();

            TableRoutes.get('/tables', getTable)

            TableRoutes.post('/tables', createTable)

            TableRoutes.put('/tables/:id', updateTable)
            
            TableRoutes.patch('/tables/:id/status', updateTableStatus)
           
            TableRoutes.delete('/tables/:id', deleteTable)


            TableRoutes.get('/categories', getCategory)

            TableRoutes.post('/categories', createCategory)

            TableRoutes.put('/categories/:id', updateCategory)

            TableRoutes.patch('/categories/:id/status', updateCategoryStatus)

            TableRoutes.get('/menu-items', getMenuItems)

            TableRoutes.post('/menu-items', createMenuItems)

            TableRoutes.put('/menu-items/:id', updateMenuItems)
            
            TableRoutes.patch('/menu-items/:id/availability', updateMenuItemsStatus)
            
            export default TableRoutes
