const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Banco de dados em memória com exemplos reais para seu trabalho
let demandas = [
    { 
        id: 1, 
        cliente: "Pop Donuts Biscoiteria", 
        servico: "Business Intelligence com Power BI", 
        prazo: "2026-06-10", 
        status: "Em Andamento" 
    },
    { 
        id: 2, 
        cliente: "Oficina do Pão", 
        servico: "Gestão e Consultoria Financeira", 
        prazo: "2026-05-25", 
        status: "Pendente" 
    },
    { 
        id: 3, 
        cliente: "Dra. Ana Silva (Consultório)", 
        servico: "Declaração de Imposto de Renda", 
        prazo: "2026-05-31", 
        status: "Concluído" 
    }
];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/demandas', (req, res) => {
    res.json(demandas);
});

app.post('/api/demandas', (req, res) => {
    const novaDemanda = {
        id: demandas.length + 1,
        status: "Iniciado",
        ...req.body
    };
    demandas.push(novaDemanda);
    res.status(201).json(novaDemanda);
});

app.listen(PORT, () => {
    console.log(`Servidor JOPF rodando em http://localhost:${PORT}`);
});