import desktopLeftImage from '../../assets/desktop/DesktopLeft.png'
import mobileLeftImage from '../../assets/mobile/MobileLeft.png'
import tabletLeftImage from '../../assets/tablet/TabletLeft.png'
import type { FeaturesSectionContent } from '../featuresData'

export const leftFeaturesContent: FeaturesSectionContent = {
    header: {
        eyebrow: 'Best-in-class support',
        title: 'Convenience and licensing that empowers',
        description: "In a world where storytelling constantly evolves, don't let licensing and poor support hold you down.",
    },
    features: [
        {
            id: 'resolution',
            title: 'Faster downloads',
            text: 'Our robust servers are primed to deliver the highest resolution images swiftly, ensuring a smooth download experience',
            modifierClass: 'features__item--rocket',
        },
        {
            id: 'abstractions',
            title: 'Convenience for teams',
            text: 'Your single account can accommodate multiple users simultaneously downloading without any disruptions, streamlining teamwork and productivity.',
            modifierClass: 'features__item--team',
        },
        {
            id: 'orientation',
            title: 'Royalty-free licensing',
            text: "Our straightforward, royalty-free licensing means your chosen images are yours to innovate with, without the hassle of negotiating usage rights for every new project.",
            modifierClass: 'features__item--citation',
        },
    ],
    image: {
        mobile: mobileLeftImage,
        tablet: tabletLeftImage,
        desktop: desktopLeftImage,
        alt: '',
    },
    imagePosition: 'left',
}
