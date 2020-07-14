const TaskList = ({ list }) => {
  const checkList = Array.isArray(list) ? list : []
  return (
    <div>
      {checkList}
      <p>mapped tasks into lists in task list container </p>
    </div>
  )
}

export default TaskList
