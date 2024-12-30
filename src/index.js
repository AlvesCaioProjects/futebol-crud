const express = require('express');
const dotenv = require('dotenv');
const teamRoutes = require('./routes/teamRoutes');

dotenv.config();
const app = express();

app.use(express.json);
app.use('/api', teamRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Servidor rodando na porta ${PORT}');
});