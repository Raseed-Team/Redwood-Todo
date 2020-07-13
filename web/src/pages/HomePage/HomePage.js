import { Link, routes } from '@redwoodjs/router'

import Todoform from 'src/components/Todoform/Todoform'
import TodoAppLayout from 'src/layouts/TodoAppLayout/TodoAppLayout'

const HomePage = () => {
  return (
    <TodoAppLayout>
      <h1>HomePage</h1>

      <p> create a todo card </p>
      <Todoform inputName="Title" submit="Create Todo Card" />
      <Link to={routes.todoCard()}>link to add tasks</Link>
    </TodoAppLayout>
  )
}

export default HomePage
