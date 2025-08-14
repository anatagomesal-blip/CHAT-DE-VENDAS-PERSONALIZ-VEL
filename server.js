import express from 'express';
import cors from 'cors';
import chatHandler from './api/chat.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.post('/api/chat', chatHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
