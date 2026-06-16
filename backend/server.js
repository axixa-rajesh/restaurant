import express from "express";
import connection from "./config/db.js";
import { DataTypes } from "sequelize";


const app = express();

app.use(express.json());



app.listen(3000, () => {
  console.log("Server Start...");
});
