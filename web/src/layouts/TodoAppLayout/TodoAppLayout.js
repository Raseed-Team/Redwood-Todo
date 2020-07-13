import { Link, routes } from '@redwoodjs/router'

const TodoAppLayout = ({ children }) => {
  return (
    <div className="layout">
      <Link to={routes.home()}>
        <button>Home</button>
      </Link>
      <Link to={routes.allTodos()}>
        <button>Todo Cards</button>
      </Link>
      <main className="content">{children}</main>
    </div>
  )
}

export default TodoAppLayout
