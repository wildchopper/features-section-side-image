export type Feature = {
    id: string
    title: string
    text: string
    modifierClass: string
}

export type FeaturesHeaderContent = {
    eyebrow: string
    title: string
    description: string
}

export type FeaturesImage = {
    mobile: string
    tablet: string
    desktop: string
    alt: string
}

export type FeaturesSectionContent = {
    header: FeaturesHeaderContent
    features: Feature[]
    image: FeaturesImage
    imagePosition: 'left' | 'right'
}
