const TaskStatus = (props) => {
    const status = props.status
    return (
        <div>
            <div>Status</div>
            <div>{status}</div>
        </div>
    )
}
export default TaskStatus