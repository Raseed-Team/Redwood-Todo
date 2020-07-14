import { render } from '@redwoodjs/testing'

import TaskList from './TaskList'

describe('TaskList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TaskList />)
    }).not.toThrow()
  })
})
