import { useState } from "react";

export default function TodoItem({ tarefa, onEditar, onToggle, onRemover }) {
  const [editando, setEditando] = useState(false);
  const [texto, setTexto] = useState(tarefa.texto);

  const salvarEdicao = () => {
    if (texto.trim()) {
      onEditar(tarefa.id, texto);
      setEditando(false);
    }
  };

  return (
    <li className={tarefa.concluida ? "concluida" : ""}>
      {editando ? (
        <>
          <input value={texto} onChange={(e) => setTexto(e.target.value)} />
          <button onClick={salvarEdicao}>Salvar</button>
        </>
      ) : (
        <>
          <span onClick={() => onToggle(tarefa.id)}>{tarefa.texto}</span>
          <button onClick={() => setEditando(true)}>Editar</button>
        </>
      )}
      <button onClick={() => onRemover(tarefa.id)}>Remover</button>
    </li>
  );
}
