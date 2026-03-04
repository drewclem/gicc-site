# GICC Site

A Nuxt 4 site with Storyblok CMS integration and Reka UI components.

## Tech Stack

- **Nuxt 4** - Vue framework with file-based routing
- **Storyblok** - Headless CMS
- **Reka UI** - Headless Vue component library
- **Tailwind CSS** - Utility-first CSS framework

## Setup

1. Install dependencies:

```bash
npm install
```

2. Copy the environment example and add your Storyblok access token:

```bash
cp .env.example .env
```

Edit `.env` and add your Storyblok access token:

```
STORYBLOK_ACCESS_TOKEN=your_token_here
STORYBLOK_VERSION=draft
```

3. Start the development server:

```bash
npm run dev
```

## Project Structure

```
app/
├── assets/css/       # Global styles
├── components/ui/    # Reka UI wrapper components
├── layouts/          # Page layouts
├── pages/            # File-based routing
└── storyblok/        # Storyblok component mappings

```

## Storyblok Components

The following Storyblok components are available:

- **Page** - Main page wrapper with body blocks
- **Hero** - Hero section with headline, subheadline, CTA, and background image
- **Feature** - Single feature card with title, description, and icon
- **FeatureGrid** - Grid layout for multiple features
- **RichText** - Rich text content block
- **Teaser** - Simple teaser headline
- **Grid** - Generic grid layout for nested blocks

## UI Components (Reka UI)

Reusable UI components built with Reka UI:

- **UiButton** - Button with variants (primary, secondary, outline) and sizes
- **UiDialog** - Modal dialog
- **UiTabs** - Tab interface
- **UiAccordion** - Collapsible accordion

Visit `/ui-demo` to see all components in action.

## Storyblok Setup

1. Create a new space in [Storyblok](https://app.storyblok.com)
2. Create content types matching the components (Page, Hero, Feature, etc.)
3. Create a "home" story using the Page content type
4. Add your access token to `.env`

## Development

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```
