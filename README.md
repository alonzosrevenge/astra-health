# Astra Health

An elegant, editorial dark landing page for Astra Health — a stealth design+AI studio exploring transparent clinical reasoning.

## Features

- **Next.js 14** with App Router and TypeScript
- **Tailwind CSS** with custom design system
- **Inter font** via next/font/google
- **Dark theme** with subtle grid background and radial glow effects
- **Accessible** with semantic HTML, ARIA labels, and focus states
- **Motion-safe** animations that respect `prefers-reduced-motion`
- **Email capture** with Formspree integration

## Design System

### Colors
- **Ink** (#0B0C0E) - Background
- **Slate** (#121418) - Secondary background
- **Graphite** (#1B1F24) - Card backgrounds
- **Mint** (#BDF8E2) - Accent color

### Typography
- **Font**: Inter (via Google Fonts)
- **Style**: Tight leading, subtle letter-spacing for editorial feel
- **Text colors**: #E6E7E8 with 70-80% opacity for hierarchy

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables (optional)
cp .env.example .env.local
```

### Configuration

#### Email Capture (Formspree)

To enable email capture functionality:

1. Sign up for a free account at [formspree.io](https://formspree.io)
2. Create a new form and get your form endpoint
3. Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_FORM_ACTION=https://formspree.io/f/your-form-id
```

If not configured, the form will use a placeholder endpoint.

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

The page will auto-reload when you make changes.

### Build

```bash
npm run build
npm start
```

## Running on Replit

1. Import this repository to Replit
2. The environment will automatically install dependencies
3. Configure your Formspree endpoint in Secrets:
   - Key: `NEXT_PUBLIC_FORM_ACTION`
   - Value: `https://formspree.io/f/your-form-id`
4. Click "Run" - the development server will start on port 5000

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import the repository to Vercel
3. Add environment variable:
   - `NEXT_PUBLIC_FORM_ACTION`: Your Formspree endpoint
4. Deploy!

Vercel will automatically detect Next.js and configure the build settings.

## Project Structure

```
astra-health/
├── app/
│   ├── layout.tsx          # Root layout with Inter font & metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles, grid & animations
├── components/
│   ├── GlowCard.tsx        # Card with mint hover glow effect
│   ├── BadgeMarquee.tsx    # Scrolling credibility stripe
│   └── EmailCapture.tsx    # Email form with Formspree
├── public/
│   └── og.png              # Open Graph image (to be added)
└── tailwind.config.ts      # Custom colors & typography
```

## Adding OG Image

Create an abstract gradient image (1200x630px) and save it as `public/og.png`. This will be used for social media previews.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## License

© 2025 Astra Health — tiny, quiet.
