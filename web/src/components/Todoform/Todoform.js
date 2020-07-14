import { Form, Submit, TextField, FieldError } from '@redwoodjs/web'
//import { Link, routes } from '@redwoodjs/router'

const Todoform = ({ submit, inputName, handleData }) => {
  const handleSubmit = (data) => {
    handleData({ ...data })
  }

  return (
    <Form onSubmit={handleSubmit} className="form">
      <TextField name={inputName} validation={{ required: true }} />
      <FieldError name={inputName} />

      <Submit>{submit}</Submit>
    </Form>
  )
}

export default Todoform
