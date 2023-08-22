import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PopupMessage } from './index'

describe('AtButton', () => {
  it('should render', async () => {
    const label = 'test button'
    render(<PopupMessage label={label} />)
    expect(screen.getByText(label)).toBeDefined()
  })
})
