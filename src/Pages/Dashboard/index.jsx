import { useState } from "react";
import { useTasks } from "../../context/TaskContext";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { DashboardContainer, Column, ColumnTitle, TaskCard, AddTaskForm, AddTaskInput, AddTaskButton, ChartContainer } from "./Dashboard.styles";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



export default function Dashboard() {
  const { tasks, addTask, reorderTasks, updateStatus, deleteTask  } = useTasks();
  const [newTaskText, setNewTaskText] = useState({ pendente: "", "em progresso": "", concluída: "" });

  const statuses = ["pendente", "em progresso", "concluída"];
  const navigate = useNavigate();
  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    reorderTasks(source.droppableId, destination.droppableId, draggableId);
  };

  const handleAddTask = (status) => {
    if (newTaskText[status].trim() === "") return;
    addTask(newTaskText[status], status);
    setNewTaskText(prev => ({ ...prev, [status]: "" }));
  };


  const chartData = statuses.map(status => ({
    name: status.toUpperCase(),
    value: tasks.filter(t => t.status === status).length
  }));

  const COLORS = ["#FF8042", "#0088FE", "#00C49F"];

  return (
    <DashboardContainer>
      <h1>Dashboard de Tarefas</h1>
      <button 
  onClick={() => navigate("/")} 
  style={{ marginBottom: "20px", padding: "8px 12px", borderRadius: "5px", cursor: "pointer" }}
>
  Voltar
</button>

      <DragDropContext onDragEnd={handleDragEnd}>
        <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
          {statuses.map((status) => (
            <Droppable droppableId={status} key={status}>
              {(provided) => (
                <Column ref={provided.innerRef} {...provided.droppableProps}>
                  <ColumnTitle>{status.toUpperCase()}</ColumnTitle>

                  {tasks.filter(t => t.status === status).map((task, index) => (
                    <Draggable draggableId={task.id} index={index} key={task.id}>
                      {(provided) => (
                        <TaskCard
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <span>{task.text}</span>
                          {status === "concluída" && (
                            <FaTrash
                              style={{ cursor: "pointer", marginLeft: "10px" }}
                              onClick={() => deleteTask(task.id)}
                            />
                          )}
                        </TaskCard>
                      )}
                    </Draggable>
                  ))}

                  {provided.placeholder}

                  <AddTaskForm onSubmit={(e) => { e.preventDefault(); handleAddTask(status); }}>
                    <AddTaskInput
                      type="text"
                      placeholder="Nova tarefa..."
                      value={newTaskText[status]}
                      onChange={(e) => setNewTaskText(prev => ({ ...prev, [status]: e.target.value }))}
                    />
                    <AddTaskButton type="submit">Adicionar</AddTaskButton>
                  </AddTaskForm>
                </Column>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>

      <ChartContainer>
        <PieChart width={300} height={300}>
          <Pie data={chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ChartContainer>
    </DashboardContainer>
  );
}