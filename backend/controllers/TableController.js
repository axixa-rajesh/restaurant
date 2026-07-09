import {DataTypes} from 'sequelize';
import  connection from '../config/db.js';
import diningTable from '../models/diningtable.cjs';

const DiningTable = diningTable(connection, DataTypes);

export let getTable =  async function(req,res){
    try {
        const tables = await DiningTable.findAll();
        return res.status(200).json(tables);
        
    } catch (error) {
         return res.status(500).json({ error: error.message });
    }
    //res.send("hello table get");
}

export let createTable =  async function(req,res){
    try {
        const newTable = await DiningTable.create(req.body);
        return res.status(201).json(newTable);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }   
    //res.send("hello table post");
}

export let updateTable =  async function(req,res){
    try {
        const { id } = req.params;
        const [updated] = await DiningTable.update(req.body, {where : { id }});
        if (!updated) return res.status(404).json({ error: 'Table not found' });
        const updatedTable = await DiningTable.findByPk(id);
        return res.status(200).json(updatedTable);
    } catch (error) {   
        return res.status(500).json({ error: error.message });
    }
    //res.send("hello table patch");
}
export let updateTableStatus =  async function(req,res){
    try {
        const { id } = req.params;      
        const { status } = req.body; 
        
        const [updated] = await DiningTable.update({ status }, { where: { id } });
        if (!updated) return res.status(404).json({ message: 'Table not found' });

        return res.status(200).json({ message: 'Table status updated successfully' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export let deleteTable = async function(req, res) {
    try {
        const { id } = req.params;
        const deleted = await DiningTable.destroy({ where: { id } });
        if (!deleted) return res.status(404).json({ message: 'Table not found' });

        return res.status(200).json({ message: 'Table deleted successfully' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
