import db from "../models/index.cjs";
console.log(db)

const { MenuItem } = db;
import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";


async function getMenuItems(req, res) {
  try {
    const data = await MenuItem.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createMenuItem(req, res) {
  try {
    const {
      menu_item_id,
      category_id,
      item_name,
      description,
      price,
      is_veg,
      is_available,
      status,
    } = req.body;
    const menuItem = await MenuItem.create({
      menu_item_id,
      category_id,
      item_name,
      description,
      price,
      is_veg,
      is_available,
      status,
    });
    res.status(201).json(menuItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateMenuItem(req, res) {
  try {
    const { menu_item_id } = req.params;
    const {
      category_id,
      item_name,
      description,
      price,
      is_veg,
      is_available,
      status,
    } = req.body;
    const [updated] = await MenuItem.update(
      {
        category_id,
        item_name,
        description,
        price,
        is_veg,
        is_available,
        status,
      },
      { where: { menu_item_id } },
    );
    if (!updated) {
      return res.status(404).json({ error: "Menu item not found" });
    }
    res.json({ message: "Menu item updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteMenuItem(req, res) {
  try {
    const { menu_item_id } = req.params;
    const deleted = await MenuItem.destroy({ where: { menu_item_id } });
    if (!deleted) {
      return res.status(404).json({ error: "Menu item not found" });
    }
    res.json({ message: "Menu item deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function patchMenuItem(req, res) {
  try {
    const { menu_item_id } = req.params;
    const updates = req.body;
    const [updated] = await MenuItem.update(updates, {
      where: { menu_item_id },
    });
    if (!updated) {
      return res.status(404).json({ error: "Menu item not found" });
    }
    res.json({ message: "Menu item updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export {
  getMenuItems,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
  patchMenuItem,
};
