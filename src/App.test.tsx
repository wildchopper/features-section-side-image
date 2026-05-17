import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
    test('smoke renders the left page by default', async () => {
        window.history.pushState({}, '', '/')

        render(<App />)

        expect(await screen.findByRole('heading', { name: 'Convenience and licensing that empowers' })).toBeInTheDocument()
    })

    test('smoke renders the right page on /right', async () => {
        window.history.pushState({}, '', '/right')

        render(<App />)

        expect(await screen.findByRole('heading', { name: 'For designers, by designers' })).toBeInTheDocument()
    })
})
