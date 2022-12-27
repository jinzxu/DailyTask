const TaskDate = (props) => {
    const date = new Date(props.date)
    return (
        <div>
            <div>date</div>
            <div>{date.toUTCString()}</div>
        </div>
    )
}
export default TaskDate