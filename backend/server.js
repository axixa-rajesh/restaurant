import categoriesRoutes from "./routes/categories.js"; 
import diningrouter from "./routes/diningtable.js";
import express from 'express';

const server = express(); 

server.use(express.json());

server.use('/categories', categoriesRoutes);
server.use('/diningtables', diningrouter);

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});