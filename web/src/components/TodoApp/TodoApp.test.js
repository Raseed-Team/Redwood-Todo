import { render } from '@redwoodjs/testing'

import TodoApp from './TodoApp'

describe('TodoApp', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TodoApp />)
    }).not.toThrow()
  })
})
