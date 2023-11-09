// // tests for the IconBtn component

// import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
// import searchIcon from '../../../assets/icons/Search.svg'
// import { IconBtn } from '.'
// import { IconBtnProps } from './IconBtn'

// const defaultProps: IconBtnProps = {
//   svg: searchIcon,
//   alt: 'search button',
//   label: 'Search',
//   className: 'h-[18.707px] w-[18.707px] gap-2.5',
//   labelClassName: 'hidden text-sm desktop:inline',
// }

// describe('IconBtn', () => {
//   it('renders without crashing', () => {
//     render(<IconBtn {...defaultProps} />)
//     expect(screen.getByRole('button')).toBeInTheDocument()
//   })

//   it('renders the button with the correct label', () => {
//     render(<IconBtn {...defaultProps} />)
//     expect(screen.getByRole('button')).toHaveTextContent('Search')
//   })

//   it('renders the button with the correct icon', () => {
//     render(<IconBtn {...defaultProps} />)
//     expect(screen.getByRole('img')).toHaveAttribute('src', searchIcon)
//   })

//   it('calls the onClick function when clicked', () => {
//     const onClick = jest.fn()
//     render(<IconBtn {...defaultProps} onClick={onClick} />)
//     userEvent.click(screen.getByRole('button'))
//     expect(onClick).toHaveBeenCalledTimes(1)
//   })
// })
