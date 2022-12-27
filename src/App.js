import React, { useEffect, useState } from "react";
import Card from "./Component/Card";
import TaskForm from "./Component/NewTask/TaskForm";
import Tasks from "./Component/Task/Tasks";
const INITIAL_TASKS = [
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
]
function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  useEffect(() => { setTasks(INITIAL_TASKS) }, [INITIAL_TASKS]);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
      prevTasks.filter(task => task.id !== deletedTask.id).map(task => task)
    ))
  }

  return (
    <Card>
      {isSubmitting && <TaskForm onSubmitNewTask={submitNewTaskHandler} onSetIsSubmitting={setIsSubmitting} />}
      {!isSubmitting && <button onClick={() => setIsSubmitting(true)}>Add new task</button>}
      <Tasks tasks={tasks} onDeleteTask={deleteTaskHandler}></Tasks>
    </Card>
  );
}

export default App;
