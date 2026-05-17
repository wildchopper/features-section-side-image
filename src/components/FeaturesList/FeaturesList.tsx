import './FeaturesList.css'
import { FeatureItem } from '../FeatureItem/FeatureItem'
import type { Feature } from '../featuresData'

type FeaturesListProps = {
    features: Feature[]
}

export function FeaturesList({ features }: FeaturesListProps) {
    return (
        <div className='features__content'>
            <ul className='features__list'>
                {features.map((feature) => (
                    <FeatureItem key={feature.id} feature={feature} />
                ))}
            </ul>
        </div>
    )
}
