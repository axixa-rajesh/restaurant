import { DataTypes } from "sequelize";
import connection from "../config/db.js";
import categoryModel from "../models/category.cjs"; 

const Category = categoryModel(connection, DataTypes);

export let getCategory = async function(req, res) {
    try {
        const categories = await Category.findAll();
        return res.status(200).json(categories);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export let createCategory = async function(req, res) {
    try {
        const newCategory = await Category.create(req.body);
        return res.status(201).json(newCategory);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export let updateCategory = async function(req, res) {
    try {
        const { id } = req.params;
        const [updated] = await Category.update(req.body, { where: { id } });
        if (!updated) return res.status(404).json({ message: 'Category not found' });

        const updatedCategory = await Category.findByPk(id);
        return res.status(200).json(updatedCategory);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export let updateCategoryStatus = async function(req, res) {
    try {
        const { id } = req.params;
        const { status } = req.body; 

        const [updated] = await Category.update({ status }, { where: { id } });
        if (!updated) return res.status(404).json({ message: 'Category not found' });

        return res.status(200).json({ message: 'Category status updated successfully' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}