import React, { useEffect, useState } from "react";
import Card from "../Card";
import TaskDate from "./TaskDate";
import TaskStatus from "./TaskStatus";
import TaskTitle from "./TaskTitle";
const Task = (props) => {
    const [task, setTask] = useState(props.task);
    useEffect(() => { setTask(props.task) }, [props.task])
    const clearStatusHandler = () => {
        setTask((prevState) => ({
            ...prevState,
            status: "done"
        }))
    }

    return (
        <Card>
            <TaskTitle title={task.title}></TaskTitle>
            <TaskDate date={task.date}></TaskDate>
            <TaskStatus status={task.status}></TaskStatus>
            <button onClick={clearStatusHandler}>Clear status</button>
        </Card>
    )
}
export default Task;