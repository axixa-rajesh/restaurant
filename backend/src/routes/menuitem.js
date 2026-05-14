import express from 'express';
import { getMenuItems, createMenuItem, updateMenuItem, deleteMenuItem, patchMenuItem} from '../controllers/menuitem.js';

const menurouter = express.Router();

menurouter.get('/', getMenuItems);
menurouter.post('/', createMenuItem);
menurouter.put('/:id', updateMenuItem);
menurouter.delete('/:id', deleteMenuItem);
menurouter.patch('/:id/status', patchMenuItem);
export default menurouter;