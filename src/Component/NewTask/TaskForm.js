import React, { useState } from "react"
const TaskForm = (props) => {
    const [task, setTask] = useState({
        date: "",
        title: "",
        status: "Todo"
    }
    )
    const dateChangeHandler = (event) => {
        setTask(prevState => (
            {
                ...prevState,
                date: event.target.value
            }
        ))
    }
    const titleChangeHandler = (event) => {
        setTask(prevState => (
            {
                ...prevState,
                title: event.target.value
            }
        ))
    }
    const statusChangeHandler = (event) => {
        setTask(prevState => (
            {
                ...prevState,
                status: event.target.value
            }
        ))
    }
    const submitFormHandler = (event) => {
        event.preventDefault();
        props.onSubmitNewTask(task)
        setTask(() => ({
            date: "",
            title: "",
            status: "Todo"
        }))
    }
    return (
        <form onSubmit={submitFormHandler}>
            <div>
                <label>Date</label>
                <input type="date" value={task.date} onChange={dateChangeHandler}></input>
            </div>
            <div>
                <label>title</label>
                <input type="text" value={task.title} onChange={titleChangeHandler}></input>
            </div>
            <div>
                <label>status</label>
                <select value={task.status} onChange={statusChangeHandler}>
                    <option value='Todo'>Todo</option>
                    <option value='Done'>Done</option>
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}
export default TaskForm