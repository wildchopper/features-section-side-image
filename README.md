# Features Section Side Image

A responsive feature section built with React, TypeScript, semantic HTML, and CSS.

## Features

- Responsive feature section with bullet content and abstract image artwork
- Default left-image page and `/right` right-image variant without React Router
- Stacked mobile and tablet layouts with a two-column desktop composition
- Component-based structure with colocated styles
- Data-driven rendering through typed props
- Responsive hero artwork through the `picture` element
- Lazy-loaded left and right section chunks
- Accessible section labelling with `aria-labelledby`
- Decorative image support through empty `alt` text
- Credits attribution extracted into a dedicated component
- Unit and integration tests with React Testing Library and Vitest

## Implementation Details

- Shared feature data types live in `src/components/featuresData.ts`
- Left and right page content live in separate lazy-loaded modules
- `App.tsx` reads `window.location.pathname` and renders `/` as left and `/right` as right
- The feature section uses semantic `main`, `section`, headings, lists, and footer markup
- The section title labels the feature section through `aria-labelledby`
- Responsive image sources are selected with `picture` and media queries
- The primary image uses asynchronous decoding and high fetch priority because it appears above the fold
- Mobile and tablet layouts stack content and image vertically
- Desktop layout uses CSS Grid and swaps image/list placement through `data-image-position`
- Component styles are colocated with their components
- Tests cover the app smoke flow and individual component contracts

## Edge Cases

- Long headings wrap instead of overflowing the layout
- Feature bullet text can wrap while keeping icons aligned
- Left and right variants keep their own copy, icon modifiers, and image assets
- Desktop layout removes mobile/tablet bottom spacing
- Tests fail when required component props are missing, renamed, or no longer rendered

## Tech Stack

- React
- TypeScript
- Vite
- CSS3
- Vitest
- React Testing Library
- ESLint

## Getting Started

Clone and run the project:

```bash
git clone https://github.com/wildchopper/features-section-side-image.git
cd features-section-side-image
npm install
npm run dev
```

Run tests:

```bash
npm run test
```

Run lint:

```bash
npm run lint
```

Build for production:

```bash
npm run build
```
