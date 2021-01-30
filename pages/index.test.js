import { render, screen } from '@testing-library/react'
import React from 'react'

import Home from './index'

describe('Home', () => {
  it('renders without crashing', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: 'Tasky' })).toBeInTheDocument()
  })
})
