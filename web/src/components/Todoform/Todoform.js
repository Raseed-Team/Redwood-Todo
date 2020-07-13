import { Form, Submit, TextField, FieldError } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const Todoform = ({ submit, inputName }) => {
  const handleSubmit = (data) => {
    console.log(data)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextField name={inputName} validation={{ required: true }} />
      <FieldError name={inputName} />
      <Submit>
        {submit === 'Create Todo Card' ? (
          <Link to={routes.todoCard()}>{submit}</Link>
        ) : (
          submit
        )}
      </Submit>
    </Form>
  )
}

export default Todoform
