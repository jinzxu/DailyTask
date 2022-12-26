import Task from "./Task"
import Card from "../Card"
const Tasks = (props) => {
    const tasks = props.tasks
    return (
        <Card>
            {
                tasks.map(task => (
                    <Task task={task}></Task>
                ))
            }
        </Card>
    )
}
export default Tasks