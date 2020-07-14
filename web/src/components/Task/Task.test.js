import { render } from '@redwoodjs/testing'

import Task from './Task'

describe('Task', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Task />)
    }).not.toThrow()
  })
})
