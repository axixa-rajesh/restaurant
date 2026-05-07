import categoriesRoutes from "./routes/categories.js"; 
import menurouter from "./routes/menuitem.js";
import diningrouter from "./routes/diningtable.js";
import express from 'express';

const app = express(); 

app.use(express.json());

app.use('/categories', categoriesRoutes);
app.use('/diningtables', diningrouter);
app.use('/menuitems', menurouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
