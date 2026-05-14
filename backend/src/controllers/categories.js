import CategoriesModel from "../models/categories.cjs";
import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const Category = CategoriesModel(sequelize, DataTypes);

async function getCategories(req, res) {
  const data = await Category.findAll();
  res.json(data);
}

function createCategory(req, res) {}

function updateCategory(req, res) {}

function deleteCategory(req, res) {}

function patchCategory(req, res) {}

export {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  patchCategory,
};
