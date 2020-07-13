import { render } from '@redwoodjs/testing'

import TodoAppLayout from './TodoAppLayout'

describe('TodoAppLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TodoAppLayout />)
    }).not.toThrow()
  })
})
