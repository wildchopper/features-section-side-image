import { render, screen } from '@testing-library/react'
import { FeaturesList } from './FeaturesList'
import type { Feature } from '../featuresData'

const features: Feature[] = [
    {
        id: 'downloads',
        title: 'Faster downloads',
        text: 'Images download quickly.',
        modifierClass: 'features__item--rocket',
    },
    {
        id: 'teams',
        title: 'Convenience for teams',
        text: 'Teams can use one account.',
        modifierClass: 'features__item--team',
    },
]

describe('FeaturesList', () => {
    test('renders all feature items', () => {
        render(<FeaturesList features={features} />)

        expect(screen.getAllByRole('listitem')).toHaveLength(features.length)
        expect(screen.getByText('Faster downloads')).toBeInTheDocument()
        expect(screen.getByText('Convenience for teams')).toBeInTheDocument()
    })
})
