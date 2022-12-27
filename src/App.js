import React, { useState } from "react";
import Card from "./Component/Card";
import TaskForm from "./Component/NewTask/TaskForm";
import Tasks from "./Component/Task/Tasks";
function App() {
  const [tasks, setTasks] = useState([
    {
      date: new Date(2021, 1, 1),
      title: "running",
      status: "todo",
      id: 1
    },
    {
      date: new Date(2021, 2, 1),
      title: "eating",
      status: "todo",
      id: 2
    },
    {
      date: new Date(2021, 2, 1),
      title: "swimming",
      status: "todo",
      id: 3
    }
  ])
  const submitNewTaskHandler = (task) => {
    setTasks(prevTasks => (
      [
        { ...task, id: prevTasks.length + 1 },
        ...prevTasks
      ]
    ))
  }
  const deleteTaskHandler = (deletedTask) => {
    setTasks(prevTasks => (
      prevTasks.filter(task => task.id != deletedTask.id).map(task => task)
    ))
  }

  return (
    <Card>
      <TaskForm onSubmitNewTask={submitNewTaskHandler}></TaskForm>
      <Tasks tasks={tasks} onDeleteTask={deleteTaskHandler}></Tasks>
    </Card>
  );
}

export default App;
