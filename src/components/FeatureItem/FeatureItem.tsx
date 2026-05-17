import './FeatureItem.css'
import type { Feature } from '../featuresData'

type FeatureItemProps = {
    feature: Feature
}

export function FeatureItem({ feature }: FeatureItemProps) {
    return (
        <li className={`features__item ${feature.modifierClass}`}>
            <div className='features__item-container'>
                <h3 className='features__item-title'>{feature.title}</h3>
                <p className='features__item-text'>{feature.text}</p>
            </div>
        </li>
    )
}
