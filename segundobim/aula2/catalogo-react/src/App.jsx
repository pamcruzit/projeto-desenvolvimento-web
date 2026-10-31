
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [produtos, setProdutos] = useState([])
  const [nome, setNome] = useState('')
  const [preco, setPreco] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [erro, setErro] = useState('')

  // Buscar produtos da API
  async function buscarProdutos() {
    try {
      const resposta = await fetch('http://localhost:3000/api/produtos')

      if (!resposta.ok) {
        throw new Error('Erro ao buscar produtos')
      }

      const dados = await resposta.json()
      setProdutos(dados)

    } catch (error) {
      setErro('Não foi possível carregar os produtos.')
    }
  }

  // Executar a busca quando a tela abrir
  useEffect(() => {
    buscarProdutos()
  }, [])

  // Cadastrar produto
  async function cadastrarProduto(event) {
    event.preventDefault()

    setMensagem('')
    setErro('')

    if (nome.trim() === '' || preco === '') {
      setErro('Preencha todos os campos.')
      return
    }

    try {
      const resposta = await fetch('http://localhost:3000/api/produtos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nome: nome,
          preco: Number(preco.replace(',', '.'))
        })
      })

      if (!resposta.ok) {
        throw new Error('Erro ao cadastrar produto')
      }

      setMensagem('Produto cadastrado com sucesso!')
      setNome('')
      setPreco('')

      await buscarProdutos()

    } catch (error) {
      setErro('Não foi possível cadastrar o produto.')
    }
  }

  // Excluir produto
  async function excluirProduto(id) {
    setMensagem('')
    setErro('')

    try {
      const resposta = await fetch(`http://localhost:3000/api/produtos/${id}`, {
        method: 'DELETE'
      })

      if (!resposta.ok) {
        throw new Error('Erro ao excluir produto')
      }

      setMensagem('Produto excluído com sucesso!')

      await buscarProdutos()

    } catch (error) {
      setErro('Não foi possível excluir o produto.')
    }
  }

  return (
    <div className="container">
      <h1>Catálogo de Produtos</h1>

      <p>Cadastre, visualize e exclua seus produtos.</p>

      <form onSubmit={cadastrarProduto}>
        <h2>Cadastrar produto</h2>

        <input
          type="text"
          placeholder="Nome do produto"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />

        <input
          type="number"
          placeholder="Preço"
          min="0.01"
          step="0.01"
          value={preco}
          onChange={(event) => setPreco(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </form>

      {mensagem && <p className="sucesso">{mensagem}</p>}
      {erro && <p className="erro">{erro}</p>}

      <h2>Produtos cadastrados</h2>

      {produtos.length === 0 ? (
        <p>Nenhum produto cadastrado.</p>
      ) : (
        <div className="lista">
          {produtos.map((produto) => (
            <div className="produto" key={produto.id}>
              <div>
                <strong>{produto.nome}</strong>
                <p>
                  ID: {produto.id} | R$ {Number(produto.preco).toFixed(2)}
                </p>
              </div>

              <button
                type="button"
                onClick={() => excluirProduto(produto.id)}
              >
                Excluir
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App
