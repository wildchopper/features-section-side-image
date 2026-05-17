import { render, screen } from '@testing-library/react'
import { FeaturesSection } from './FeaturesSection'
import { leftFeaturesContent } from './leftFeaturesContent'
import { rightFeaturesContent } from './rightFeaturesContent'

describe('FeaturesSection', () => {
    test('renders left content', () => {
        const { container } = render(<FeaturesSection content={leftFeaturesContent} />)

        expect(screen.getByRole('heading', { name: 'Convenience and licensing that empowers' })).toBeInTheDocument()
        expect(screen.getByText('Faster downloads')).toBeInTheDocument()
        expect(container.querySelector('.features')).toHaveAttribute('data-image-position', 'left')
        expect(container.querySelector('.features')).toHaveAccessibleName('Convenience and licensing that empowers')
    })

    test('renders right content', () => {
        const { container } = render(<FeaturesSection content={rightFeaturesContent} />)

        expect(screen.getByRole('heading', { name: 'For designers, by designers' })).toBeInTheDocument()
        expect(screen.getByText('5K resolution support')).toBeInTheDocument()
        expect(container.querySelector('.features')).toHaveAttribute('data-image-position', 'right')
        expect(container.querySelector('.features')).toHaveAccessibleName('For designers, by designers')
    })
})
