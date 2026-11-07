const express = require("express");

const app = express();

app.use(express.json());

const produtoRoutes = require("./routes/produtoRoutes");

app.use("/api/produtos", produtoRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});