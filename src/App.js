import React, { useState } from "react";
import Card from "./Component/Card";
import Task from "./Component/Task/Task";
function App() {
  const [tasks, setTasks] = useState([
    {
      date: new Date(2021, 1, 1),
      title: "running",
      status: "todo",
      id: 1
    }
  ])
  console.log(tasks)
  return (
    <Card>
      <Task task={tasks[0]}></Task>
    </Card>
  );
}

export default App;
