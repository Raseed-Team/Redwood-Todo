import { Link } from '@redwoodjs/router'
import TodoAppLayout from 'src/layouts/TodoAppLayout/TodoAppLayout'

const TodoCardPage = () => {
  return (
    <TodoAppLayout>
      <h1>TodoCardPage</h1>
      <p>Display a TodoCard here with Category title form to add tasks</p>
    </TodoAppLayout>
  )
}

export default TodoCardPage
