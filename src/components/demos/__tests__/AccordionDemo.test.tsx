import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import React from 'react'
import AccordionDemo from '../AccordionDemo'

describe('AccordionDemo', () => {
  it('renders triggers and content containers', () => {
    render(<AccordionDemo />)
    expect(screen.getByText('What is LiqUIdify?')).toBeInTheDocument()
    expect(screen.getByText('How do I install it?')).toBeInTheDocument()
  })
})
