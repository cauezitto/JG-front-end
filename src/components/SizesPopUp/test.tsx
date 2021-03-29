import { render, screen } from '@testing-library/react'

import SizesPopUp from '.'

describe('<SizesPopUp />', () => {
  it('should render the heading', () => {
    const { container } = render(<SizesPopUp />)

    expect(screen.getByRole('heading', { name: /SizesPopUp/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
