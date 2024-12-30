import express from 'express';
import dotenv from 'dotenv';
import teamRoutes from './routes/teamRoutes.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api', teamRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});