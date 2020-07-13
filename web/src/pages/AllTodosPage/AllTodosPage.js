import { Link, routes } from '@redwoodjs/router'
import TodoAppLayout from 'src/layouts/TodoAppLayout/TodoAppLayout'
const AllTodosPage = () => {
  return (
    <TodoAppLayout>
      <h1>AllTodosPage</h1>
      <p>each todocard will link to a single todocard page</p>
      <Link to={routes.todoCard()}>a todo card</Link>
    </TodoAppLayout>
  )
}

export default AllTodosPage
