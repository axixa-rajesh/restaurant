import express from "express";
import connection from "./config/db.js";
import { DataTypes } from "sequelize";
import TableRoutes from './routes/TableRoutes.js'

const app = express();

app.use(express.json());

app.use('/tables', TableRoutes)


app.listen(3000, () => {
  console.log("Server Start...");
});
