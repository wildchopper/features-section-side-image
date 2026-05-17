import './App.css'
import { lazy, Suspense } from 'react'

const Credits = lazy(() => import('./components/Credits/Credits').then((module) => ({ default: module.Credits })))
const LeftFeaturesSection = lazy(() => import('./components/FeaturesSection/LeftFeaturesSection'))
const RightFeaturesSection = lazy(() => import('./components/FeaturesSection/RightFeaturesSection'))

export default function App() {
    const FeaturesPage = window.location.pathname.endsWith('/right') ? RightFeaturesSection : LeftFeaturesSection

    return (
        <>
            <main className='wrapper'>
                <Suspense fallback={null}>
                    <FeaturesPage />
                </Suspense>
            </main>

            <Suspense fallback={null}>
                <Credits />
            </Suspense>
        </>
    )
}
