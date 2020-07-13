import { render } from '@redwoodjs/testing'

import TodoCardPage from './TodoCardPage'

describe('TodoCardPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TodoCardPage />)
    }).not.toThrow()
  })
})
