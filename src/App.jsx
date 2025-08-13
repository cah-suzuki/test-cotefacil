import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import TodoList from "./Pages/ToDoList";
import Gallery from "./Pages/Gallery";
import Details from "./Pages/Gallery/Details";
import Dashboard from "./Pages/Dashboard";
import { TaskProvider } from "./context/TaskContext";

export default function App() {
  return (
    <TaskProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:name" element={<Details />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </TaskProvider>
  );
}
