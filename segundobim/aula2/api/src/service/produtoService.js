const produtos = require("../data/produtos");

function listarProdutos() {
    return produtos;
}

function buscarProdutoPorId(id) {
    return produtos.find(p => p.id === id);
}

function adicionarProduto(novoProduto) {
    novoProduto.id = produtos.length > 0
        ? Math.max(...produtos.map(p => p.id)) + 1
        : 1;

    produtos.push(novoProduto);

    return novoProduto;
}

function atualizarProduto(id, dadosAtualizados) {
    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return null;
    }

    produto.nome = dadosAtualizados.nome;
    produto.preco = dadosAtualizados.preco;

    return produto;
}

function excluirProduto(id) {
    const indice = produtos.findIndex(p => p.id === id);

    if (indice === -1) {
        return false;
    }

    produtos.splice(indice, 1);

    return true;
}

module.exports = {
    listarProdutos,
    buscarProdutoPorId,
    adicionarProduto,
    atualizarProduto,
    excluirProduto
};