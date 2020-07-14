//import { Link, routes } from '@redwoodjs/router'

import TodoCard from 'src/components/TodoCard/TodoCard'
import TodoAppLayout from 'src/layouts/TodoAppLayout/TodoAppLayout'

const TodoCardPage = () => {
  return (
    <TodoAppLayout>
      <h1>TodoCardPage</h1>
      <p>Display a TodoCard here with Category title form to add tasks</p>
      <TodoCard />
    </TodoAppLayout>
  )
}

export default TodoCardPage
