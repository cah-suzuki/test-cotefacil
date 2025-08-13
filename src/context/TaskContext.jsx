import React, { createContext, useState, useContext } from "react";

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([
    { id: "1", text: "Fazer Test React", status: "pendente" },
    { id: "2", text: "Fazer exercício", status: "em progresso" },
    { id: "3", text: "Estudar PokeAPI", status: "concluída" },
  ]);

  const addTask = (text, status) => {
    setTasks([...tasks, { id: Date.now().toString(), text, status }]);
  };

  const updateStatus = (id, newStatus) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, status: newStatus } : t));
  };

  const reorderTasks = (sourceId, destinationId, draggableId) => {
    updateStatus(draggableId, destinationId);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateStatus, reorderTasks, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}
