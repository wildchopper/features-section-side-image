import './FeaturesSection.css'
import { FeaturesHeader } from '../FeaturesHeader/FeaturesHeader'
import { FeaturesList } from '../FeaturesList/FeaturesList'
import type { FeaturesSectionContent } from '../featuresData'

type FeaturesSectionProps = {
    content: FeaturesSectionContent
}

export function FeaturesSection({ content }: FeaturesSectionProps) {
    const headingId = `features-title-${content.imagePosition}`

    return (
        <section className='features' data-image-position={content.imagePosition} aria-labelledby={headingId}>
            <FeaturesHeader header={content.header} titleId={headingId} />
            <FeaturesList features={content.features} />
            <picture className='features__picture'>
                <source
                    media='(min-width: 1440px)'
                    srcSet={content.image.desktop}
                    sizes='calc((100vw - 256px) / 2)'
                />
                <source media='(min-width: 768px)' srcSet={content.image.tablet} sizes='calc(100vw - 64px)' />
                <img
                    className='features__image'
                    src={content.image.mobile}
                    alt={content.image.alt}
                    loading='eager'
                    decoding='async'
                    fetchPriority='high'
                    sizes='calc(100vw - 56px)'
                />
            </picture>
        </section>
    )
}
