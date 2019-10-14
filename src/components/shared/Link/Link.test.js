import React from 'react'
import { render } from '@testing-library/react'
import Link from './Link'

describe('Link', () => {
  const props = {
    path: '/',
    isButton: true,
    isBlock: false,
    variation: 'primary',
    isActive: false,
    isExternal: false
  }

  const children = 'EXAMPLE_TEXT'

  it('renders properly provided all props', () => {
    const { container, getByText } = render(<Link {...props}>{children}</Link>)
    expect(getByText(children)).toBe(container.firstChild)
    expect(getByText(children).attributes.getNamedItem('to').value).toBe('/')
    expect(getByText(children).classList.contains('is-button')).toBe(true)
    expect(getByText(children).classList.contains('is-block')).toBe(false)
    expect(getByText(children).classList.contains(`Link--primary`)).toBe(false)
  })

  it('has active class name when active', () => {
    const hasActiveProps = { ...props, isActive: true }
    const { getByText } = render(<Link {...hasActiveProps}>{children}</Link>)
    expect(getByText(children).attributes.getNamedItem('activeclassname').value).toBe('is-active')
  })

  it('has variation class name when it is not a button', () => {
    const notButtonProps = {...props, isButton: false, isBlock: true}
    const { getByText } = render(<Link {...notButtonProps}>{children}</Link>)
    expect(getByText(children).classList.contains('is-block')).toBe(true)
    expect(getByText(children).classList.contains(`Link--primary`)).toBe(true)
  })

  it('renders an anchor element if has external link destination', () => {
    const isExternalProps = { ...props, isExternal: true }
    const { getByText } = render(<Link {...isExternalProps}>{children}</Link>)
    expect(getByText(children).tagName).toBe('A')
    expect(getByText(children).attributes.getNamedItem('href').value).toBe('/')
    expect(getByText(children).attributes.getNamedItem('target').value).toBe('_blank')
  })

})
