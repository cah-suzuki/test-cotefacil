import { useState, useEffect } from "react";
import TodoItem from "./ToDoItem";
import "./ToDoList.css";
import { useNavigate } from "react-router-dom";


export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas")) || [];
    setTarefas(tarefasSalvas);
  }, []);

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  const adicionarTarefa = () => {
    if (!novaTarefa.trim()) return;
    setTarefas([...tarefas, { id: Date.now(), texto: novaTarefa, concluida: false }]);
    setNovaTarefa("");
  };

  const editarTarefa = (id, novoTexto) => {
    setTarefas(tarefas.map(t => (t.id === id ? { ...t, texto: novoTexto } : t)));
  };

  const toggleConcluida = (id) => {
    setTarefas(tarefas.map(t => (t.id === id ? { ...t, concluida: !t.concluida } : t)));
  };

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter(t => t.id !== id));
  };

  return (
    <div className="container">
      <h1>Lista de To Do</h1>
      <button 
  onClick={() => navigate("/")} 
  style={{ marginBottom: "20px", padding: "8px 12px", borderRadius: "5px", cursor: "pointer" }}
>
  Voltar
</button>
      <div className="input-group">
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Digite uma tarefa..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              adicionarTarefa();
            }
          }}
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>

      <ul>
        {tarefas.map((tarefa) => (
          <TodoItem
            key={tarefa.id}
            tarefa={tarefa}
            onEditar={editarTarefa}
            onToggle={toggleConcluida}
            onRemover={removerTarefa}
          />
        ))}
      </ul>
    </div>
  );
}