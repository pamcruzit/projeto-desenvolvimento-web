const express = require("express");
const cors = require("cors");

const app = express();

const PORTA = 3000;

app.use(express.json());
app.use(cors());
const produtos = [
    { id: 1, nome: "notebook", preco: 120.00 },
    { id: 2, nome: "Mouse", preco: 65.90 },
    { id: 3, nome: "Monitor", preco: 899.90 }
];


app.get("/api/produtos", (req, res) => {
    res.status(200).json(produtos);
});


app.post("/api/produtos", (req, res) => {
    const novoProduto = req.body;

    produtos.push(novoProduto);

    res.status(201).json(novoProduto);
});


app.get("/api/produtos/:id", (req, res) => {

    const id = Number(req.params.id);

    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    res.status(200).json(produto);
});


app.put("/api/produtos/:id", (req, res) => {

    const id = Number(req.params.id);

    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    produto.nome = req.body.nome;
    produto.preco = req.body.preco;

    res.status(200).json(produto);
});


app.delete("/api/produtos/:id", (req, res) => {

    const id = Number(req.params.id);

    const indice = produtos.findIndex(p => p.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    produtos.splice(indice, 1);

    res.status(200).json({
        mensagem: "Produto excluído com sucesso!"
    });
});

app.listen(PORTA, () => {
    console.log(`Servidor executando na porta ${PORTA}`);
});