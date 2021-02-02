import { render, screen } from '@testing-library/react'
import React from 'react'

import Home from './index.page'

describe('Home', () => {
  it('renders without crashing', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: 'Tasky' })).toBeInTheDocument()
  })
})
