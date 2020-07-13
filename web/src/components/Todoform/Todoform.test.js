import { render } from '@redwoodjs/testing'

import Todoform from './Todoform'

describe('Todoform', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Todoform />)
    }).not.toThrow()
  })
})
