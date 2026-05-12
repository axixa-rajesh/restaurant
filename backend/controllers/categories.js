import CategoriesModel from "../models/categories.cjs";
import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const Category = CategoriesModel(sequelize, DataTypes);

async function getCategories(req, res) {
  try {
  const data = await Category.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createCategory(req, res) {
  try {
    const { name } = req.body;
    const category = await Category.create({ name });
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateCategory(req, res) {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const [updated] = await Category.update({ name }, { where: { id } });
    if (!updated) {
      return res.status(404).json({ error: "Category not found" });
    }
    const updatedCategory = await Category.findByPk(id);
    res.json(updatedCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteCategory(req, res) {
  try {
    const { id } = req.params;
    const deleted = await Category.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function patchCategory(req, res) {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const [updated] = await Category.update({ name }, { where: { id } });
    if (!updated) {
      return res.status(404).json({ error: "Category not found" });
    }
    const updatedCategory = await Category.findByPk(id);
    res.json(updatedCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  patchCategory,
};
