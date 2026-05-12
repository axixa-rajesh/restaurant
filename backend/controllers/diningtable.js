import DiningTable from '../models/diningtable.js';
import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const DiningTableModel = DiningTable(sequelize, DataTypes);

async function getDiningTables(req, res) {
    try {
        const diningTables = await DiningTableModel.findAll();
        res.json(diningTables);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

async function createDiningTable(req, res) {
    try {
        const diningTable = await DiningTableModel.create(req.body);
        res.status(201).json(diningTable);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function updateDiningTable(req, res) {
    try { const { id } = req.params.id;
        const [updated] = await DiningTableModel.update(req.body, { where: { id } });
        res.json({ updated });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function deleteDiningTable(req, res) {
    try {
        const { id } = req.params.id;
        const deleted = await DiningTableModel.destroy({ where: { id } });
        res.json({ deleted });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function patchDiningTable(req, res) {
    try {
        const { id } = req.params.id;
        const [updated] = await DiningTableModel.update(req.body, { where: { id } });
        res.json({ updated });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export { getDiningTables, createDiningTable, updateDiningTable, deleteDiningTable, patchDiningTable };