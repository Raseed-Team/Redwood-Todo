import Todoform from 'src/components/Todoform/Todoform'

import TaskList from '../TaskList/TaskList'

const TodoCard = ({ title }) => {
  const showData = (data) => {
    console.log(data)
  }

  const handleSave = () => {}

  return (
    <div className="card-container">
      <h2>{title}</h2>
      <Todoform inputName="body" submit="Add tasks" handleData={showData} />
      <TaskList />
      <button onClick={handleSave}>Save</button>
    </div>
  )
}

export default TodoCard
