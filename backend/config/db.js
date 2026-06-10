import { Sequelize } from "sequelize";
import dotenv from "dotenv"

const connection = new Sequelize("restaurant", "root", "process.env.PASSWORD",{
    host:"localhost",
    dialect:"mysql"
})

export default connection


