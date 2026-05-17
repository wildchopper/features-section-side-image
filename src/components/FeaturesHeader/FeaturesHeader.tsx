import './FeaturesHeader.css'
import type { FeaturesHeaderContent } from '../featuresData'

type FeaturesHeaderProps = {
    header: FeaturesHeaderContent
    titleId: string
}

export function FeaturesHeader({ header, titleId }: FeaturesHeaderProps) {
    return (
        <div className='features__header'>
            <div className='features__titles'>
                <h2 className='features__eyebrow'>{header.eyebrow}</h2>
                <h1 className='features__title' id={titleId}>
                    {header.title}
                </h1>
            </div>
            <p className='features__description'>{header.description}</p>
        </div>
    )
}
