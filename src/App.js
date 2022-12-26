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
    setTasks(prevState => (
      [
        ...prevState,
        { ...task, id: prevState.length + 1 }
      ]
    ))
  }

  return (
    <Card>
      <TaskForm onSubmitNewTask={submitNewTaskHandler}></TaskForm>
      <Tasks tasks={tasks}></Tasks>
    </Card>
  );
}

export default App;
