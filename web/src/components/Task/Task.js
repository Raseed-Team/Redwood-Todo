import { FaCheck, FaRegCircle, FaRegTrashAlt } from 'react-icons'

const Task = ({ tasks }) => {
  return (
    <div className="task-container">
      <span>{tasks.complete ? <FaCheck /> : <FaRegCircle />}</span>
      <p>{tasks.body}</p>
      <span>
        <FaRegTrashAlt />
      </span>
    </div>
  )
}

export default Task
