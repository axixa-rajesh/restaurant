import express from 'express';
import { getDiningTables, createDiningTable, updateDiningTable, deleteDiningTable } from '../controllers/diningtable.js';

const diningrouter = express.Router();

diningrouter.get('/', getDiningTables);
diningrouter.post('/', createDiningTable);
diningrouter.put('/:id', updateDiningTable);
diningrouter.delete('/:id', deleteDiningTable);

export default diningrouter;