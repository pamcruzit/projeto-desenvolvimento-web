
import { useState } from "react";
import "./App.css";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [texto, setTexto] = useState("");

  function adicionarTarefa(event) {
    event.preventDefault();

    const textoDigitado = texto.trim();

    if (textoDigitado === "") {
      return;
    }

    const novaTarefa = {
      id: Date.now(),
      text: textoDigitado,
    };

    setTarefas([...tarefas, novaTarefa]);
    setTexto("");
  }

  function removerTarefa(id) {
    const novaLista = tarefas.filter(
      (tarefa) => tarefa.id !== id
    );

    setTarefas(novaLista);
  }

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>

      <form className="entrada" onSubmit={adicionarTarefa}>
        <input
          type="text"
          placeholder="Digite uma tarefa..."
          value={texto}
          onChange={(evento) => setTexto(evento.target.value)}
        />

        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            <span>{tarefa.text}</span>

            <button
              type="button"
              className="btnRemover"
              onClick={() => removerTarefa(tarefa.id)}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
