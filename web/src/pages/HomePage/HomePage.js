import { Link, routes } from '@redwoodjs/router'
import TodoApp from 'src/components/TodoApp/TodoApp'
import TodoAppLayout from 'src/layouts/TodoAppLayout/TodoAppLayout'

const HomePage = () => {
  return (
    <TodoAppLayout>
      <h1>HomePage</h1>

      <p> create a todo card </p>
      <TodoApp />
      <Link to={routes.todoCard()}>link to add tasks</Link>
    </TodoAppLayout>
  )
}

export default HomePage
