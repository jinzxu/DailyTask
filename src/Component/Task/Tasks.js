import Task from "./Task"
import Card from "../Card"
const Tasks = (props) => {
    const tasks = props.tasks
    const deleteTaskHandler = (deletedTask) => {
        props.onDeleteTask(deletedTask);
    }
    return (
        <Card>
            {
                tasks.map(task => (
                    <Task task={task} onDeleteTask={deleteTaskHandler}></Task>
                ))
            }
        </Card>
    )
}
export default Tasks