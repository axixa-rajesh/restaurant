import express from "express";
import connection from "./config/db.js";
import { DataTypes } from "sequelize";
import TableRoutes from './routes/TableRoutes.js'
import CategoriesRoutes from './routes/CategoriesRoutes.js'
import MenuitemsRoutes from './routes/Menu-itemsRoutes.js'

const app = express();

app.use(express.json());

app.use('/tables', TableRoutes)

app.use('/categories', CategoriesRoutes)

app.use('/menuitems', MenuitemsRoutes)


app.listen(3000, () => {
  console.log("Server Start...");
});
