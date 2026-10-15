
const botao = document.getElementById("btnCarregar");
const mensagem = document.getElementById("mensagem");
const listaProdutos = document.getElementById("listaProdutos");

botao.addEventListener("click", carregarProdutos);

async function carregarProdutos() {
    mensagem.textContent = "Carregando produtos...";
    mensagem.classList.remove("erro");
    listaProdutos.innerHTML = "";
    botao.disabled = true;

    try {
        const resposta = await fetch(
            "https://dummyjson.com/products?limit=12"
        );

        // Verifica se a resposta HTTP foi bem-sucedida
        if (!resposta.ok) {
            throw new Error("Erro ao consultar a API.");
        }

        // Converte a resposta para um objeto JavaScript
        const dados = await resposta.json();

        // Percorre a lista de produtos retornada pela API
        dados.products.forEach(function(produto) {
            const card = document.createElement("div");
            card.classList.add("card");

            const imagem = document.createElement("img");
            imagem.src = produto.thumbnail;
            imagem.alt = produto.title;

            const nome = document.createElement("h2");
            nome.textContent = produto.title;

            const preco = document.createElement("p");
            preco.classList.add("preco");
            preco.textContent = "$ " + produto.price.toFixed(2);

            const categoria = document.createElement("span");
            categoria.classList.add("categoria");
            categoria.textContent = produto.category;

            card.appendChild(imagem);
            card.appendChild(nome);
            card.appendChild(preco);
            card.appendChild(categoria);

            listaProdutos.appendChild(card);
        });

        mensagem.textContent =
            dados.products.length + " produtos carregados com sucesso!";

    } catch (erro) {
        console.error("Erro:", erro);

        mensagem.textContent =
            "Não foi possível carregar os produtos. Tente novamente.";

        mensagem.classList.add("erro");

    } finally {
        // Reativa o botão mesmo se ocorrer um erro
        botao.disabled = false;
    }
}
