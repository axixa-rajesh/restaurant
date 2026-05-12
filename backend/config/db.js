import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.USER,
    process.env.PASSWORD, {
    host: "127.0.0.1",
    dialect: "mysql",
});

export default sequelize;
