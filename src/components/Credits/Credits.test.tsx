import { render, screen } from '@testing-library/react'
import { Credits } from './Credits'

describe('Credits', () => {
    test('renders challenge and author links', () => {
        render(<Credits />)

        expect(screen.getByRole('link', { name: 'GreatFrontEnd Projects' })).toHaveAttribute(
            'href',
            'https://www.greatfrontend.com/projects?ref=challenges',
        )
        expect(screen.getByRole('link', { name: 'GreatFrontEnd Projects' })).toHaveAttribute('rel', 'noreferrer')
        expect(screen.getByRole('link', { name: 'Andrei Tolstorebrov' })).toHaveAttribute(
            'href',
            'https://www.greatfrontend.com/projects/u/wildchopper',
        )
        expect(screen.getByRole('link', { name: 'Andrei Tolstorebrov' })).toHaveAttribute('rel', 'noreferrer')
    })
})
