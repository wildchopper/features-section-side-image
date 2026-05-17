import { render, screen } from '@testing-library/react'
import { FeatureItem } from './FeatureItem'
import type { Feature } from '../featuresData'

const feature: Feature = {
    id: 'downloads',
    title: 'Faster downloads',
    text: 'Images download quickly.',
    modifierClass: 'features__item--rocket',
}

describe('FeatureItem', () => {
    test('renders feature content and modifier class', () => {
        render(
            <ul>
                <FeatureItem feature={feature} />
            </ul>,
        )

        expect(screen.getByRole('heading', { name: feature.title })).toBeInTheDocument()
        expect(screen.getByText(feature.text)).toBeInTheDocument()
        expect(screen.getByRole('listitem')).toHaveClass('features__item', feature.modifierClass)
    })
})
