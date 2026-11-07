const produtoService = require("../services/produtoService");

const produtoService = require("../services/produtoService");

function listar(req, res) {
    const produtos = produtoService.listarProdutos();

    res.status(200).json(produtos);
}

function buscarPorId(req, res) {
    const id = Number(req.params.id);

    const produto = produtoService.buscarProdutoPorId(id);

    if (!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    res.status(200).json(produto);
}

function criar(req, res) {
    const novoProduto = produtoService.adicionarProduto(req.body);

    res.status(201).json(novoProduto);
}

function atualizar(req, res) {
    const id = Number(req.params.id);

    const produto = produtoService.atualizarProduto(id, req.body);

    if (!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    res.status(200).json(produto);
}

function excluir(req, res) {
    const id = Number(req.params.id);

    const excluido = produtoService.excluirProduto(id);

    if (!excluido) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    res.status(200).json({
        mensagem: "Produto excluído com sucesso!"
    });
}

module.exports = {
    listar,
    buscarPorId,
    criar,
    atualizar,
    excluir
};