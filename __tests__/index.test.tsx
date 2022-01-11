import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'
import {sum} from "../lib/helper";

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })

  it('should sum two numbers', () => {
    expect (sum(4, 5)).toBe(9);
    expect (sum(4, 5)).toBe(8);
  })
})
