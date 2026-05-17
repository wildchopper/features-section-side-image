import desktopRightImage from '../../assets/desktop/DesktopRight.png'
import mobileRightImage from '../../assets/mobile/MobileRight.png'
import tabletRightImage from '../../assets/tablet/TabletRight.png'
import type { FeaturesSectionContent } from '../featuresData'

export const rightFeaturesContent: FeaturesSectionContent = {
    header: {
        eyebrow: 'High quality images',
        title: 'For designers, by designers',
        description: 'Unleash boundless creativity with a large repository of images optimized for designers',
    },
    features: [
        {
            id: 'resolution',
            title: '5K resolution support',
            text: 'All images boast a minimum resolution of 5K, ensuring crisp, crystal-clear quality.',
            modifierClass: 'features__item--hd',
        },
        {
            id: 'abstractions',
            title: 'From water to glass',
            text: 'We offer a wide array of abstractions, ranging from water to glass, and encompassing various styles including 3D and vector.',
            modifierClass: 'features__item--water',
        },
        {
            id: 'orientation',
            title: 'Portrait or landscape',
            text: "Effortlessly adapt your images for any platform - whether it's a stunning wallpaper or captivating Instagram reels and stories.",
            modifierClass: 'features__item--portrait',
        },
    ],
    image: {
        mobile: mobileRightImage,
        tablet: tabletRightImage,
        desktop: desktopRightImage,
        alt: '',
    },
    imagePosition: 'right',
}
