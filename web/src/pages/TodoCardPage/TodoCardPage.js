//import { Link, routes } from '@redwoodjs/router'

import Todoform from 'src/components/Todoform/Todoform'
import TodoAppLayout from 'src/layouts/TodoAppLayout/TodoAppLayout'

const TodoCardPage = () => {
  return (
    <TodoAppLayout>
      <h1>TodoCardPage</h1>
      <p>Display a TodoCard here with Category title form to add tasks</p>
      <Todoform inputName="body" submit="Add tasks" />
    </TodoAppLayout>
  )
}

export default TodoCardPage
