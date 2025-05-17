# Khalid Abdul Jabbar's Portfolio

A modern, responsive portfolio website built with SvelteKit, TypeScript, and shadcn-svelte.

## 🚀 Features

- Clean, modern design showcasing professional experience and skills
- Fully responsive for all device sizes
- Interactive animations and transitions
- Accessible according to WCAG 2.1 AA standards
- Type-safe with TypeScript
- Component-based architecture for maintainability

## 🧱 Project Structure

```
/src
├── lib
│   ├── components
│   │   ├── ui                # Core reusable UI components
│   │   ├── animated          # Reusable animated components
│   │   └── ...               # Section components
│   ├── data                  # Static or local structured data files
│   ├── types                 # TypeScript type definitions
│   └── utils                 # Utility functions and helpers
├── routes
│   ├── +layout.svelte        # Main layout with header and footer
│   └── +page.svelte          # Main page imports components and data
└── app.postcss               # Global styles
```

## 🛠️ Technologies Used

- **SvelteKit**: Frontend framework
- **TypeScript**: Type safety
- **shadcn-svelte**: UI component library
- **Tailwind CSS**: Styling
- **Iconify Icons**: SVG icons
- **Custom animation components**: For smooth transitions

## 📦 Getting Started

1. Clone the repository

```bash
git clone https://github.com/yourusername/khalid-portfolio.git
cd khalid-portfolio
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Build for production

```bash
npm run build
```

## 🎨 Customization

### Modifying Content

All content is stored in TypeScript files in the `/src/lib/data` directory:

- `about.ts`: Personal information and contact details
- `experience.ts`: Work history and achievements
- `skills.ts`: Technical skills by category
- `education.ts`: Educational background
- `projects.ts`: Project highlights

### Styling

The project uses Tailwind CSS with the shadcn-svelte theme. Colors and other design tokens can be modified in `src/app.postcss`.

## 🚀 Deployment

This site can be deployed to any static site hosting platform:

1. Build the site:

```bash
npm run build
```

2. Deploy the contents of the `build` directory to your hosting provider (Vercel, Netlify, GitHub Pages, etc.)

## 📄 License

MIT

## 👤 About

This portfolio website showcases the professional experience and skills of Khalid Abdul Jabbar, a Senior QA Engineer and Test Architect specializing in test automation and AI-assisted testing solutions.
