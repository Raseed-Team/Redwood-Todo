import { render } from '@redwoodjs/testing'

import AllTodosPage from './AllTodosPage'

describe('AllTodosPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AllTodosPage />)
    }).not.toThrow()
  })
})
