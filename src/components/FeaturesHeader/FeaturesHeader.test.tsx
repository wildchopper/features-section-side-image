import { render, screen } from '@testing-library/react'
import { FeaturesHeader } from './FeaturesHeader'
import type { FeaturesHeaderContent } from '../featuresData'

const header: FeaturesHeaderContent = {
    eyebrow: 'Best-in-class support',
    title: 'Convenience and licensing that empowers',
    description: 'Supportive description text.',
}

describe('FeaturesHeader', () => {
    test('renders eyebrow, title, and description', () => {
        render(<FeaturesHeader header={header} titleId='features-title-test' />)

        expect(screen.getByRole('heading', { level: 2, name: header.eyebrow })).toBeInTheDocument()
        expect(screen.getByRole('heading', { level: 1, name: header.title })).toBeInTheDocument()
        expect(screen.getByRole('heading', { level: 1, name: header.title })).toHaveAttribute(
            'id',
            'features-title-test',
        )
        expect(screen.getByText(header.description)).toBeInTheDocument()
    })
})
