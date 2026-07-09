import { DataTypes } from "sequelize";
import connection from "../config/db.js";
import menuitemModel from "../models/menuitem.cjs"; 

const MenuItem = menuitemModel(connection, DataTypes);

export let getMenuItems = async function(req, res) {
    try {
        const items = await MenuItem.findAll();
        return res.status(200).json(items);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export let createMenuItems = async function(req, res) {
    try {
        const newItem = await MenuItem.create(req.body);
        return res.status(201).json(newItem);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export let updateMenuItems = async function(req, res) {
    try {
        const { id } = req.params;
        const [updated] = await MenuItem.update(req.body, { where: { id } });
        if (!updated) return res.status(404).json({ message: 'Menu item not found' });

        const updatedItem = await MenuItem.findByPk(id);
        return res.status(200).json(updatedItem);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export let updateMenuItemsStatus = async function(req, res) {
    try {
        const { id } = req.params;
        const { is_available } = req.body; 

        const [updated] = await MenuItem.update({ is_available }, { where: { id } });
        if (!updated) return res.status(404).json({ message: 'Menu item not found' });

        return res.status(200).json({ message: 'Availability status updated successfully' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
