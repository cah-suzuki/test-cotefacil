import styled from "styled-components";

export const DashboardContainer = styled.div`
  padding: 20px;
  text-align: center;
  background: #121212; 
  min-height: 100vh;
  color: #fff;
`;

export const Column = styled.div`
  background: #1e1e1e; 
  border-radius: 8px;
  padding: 15px;
  width: 250px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
`;

export const ColumnTitle = styled.h3`
  text-align: center;
  margin-bottom: 10px;
  color: #00b894; 
`;

export const TaskCard = styled.div`
  background: #2a2a2a; 
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.4);
  cursor: grab;
  color: #fff;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.02);
  }
`;

export const AddTaskForm = styled.form`
  display: flex;
  gap: 5px;
  margin-top: auto;
`;

export const AddTaskInput = styled.input`
  flex: 1;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #333;
  background: #2a2a2a;
  color: #fff;

  &::placeholder {
    color: #aaa;
  }
`;

export const AddTaskButton = styled.button`
  padding: 8px 12px;
  border-radius: 6px;
  border: none;
  background: #00b894; 
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;
  
  &:hover {
    background: #019870;
  }
`;

export const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const chartColors = ["#00b894", "#e17055", "#0984e3"];
