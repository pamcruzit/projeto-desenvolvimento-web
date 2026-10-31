const express = require ('express');
const cors = require ('cors');

const app = express();
app.use(express.json());
app.use(cors());
const PORTA = 3000;

const produtos = [
    {id: 1, nome: "Teclado", preco: 120.00},
    {id: 2, nome: "Mouse", preco: 65.90},
    {id: 3, nome: "Monitor", preco: 899.99}
]

app.get('/api/produtos', (req, res)=>{
    res.json(produtos);
});

app.post('/api/produtos', (req, res)=>{
    const novoProduto = req.body;
    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
});

app.listen(PORTA, () => {
    console.log(`Servidor escutando na porta ${PORTA}`);
});