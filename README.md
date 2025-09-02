# 🚿 Samba Shampoo Landing Page

A modern, responsive landing page for Samba Shampoo brand, specializing in Brazilian hair care products. Built with cutting-edge web technologies to deliver an exceptional user experience and optimal conversion rates.

## ✨ Features

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Modern UI/UX**: Clean, elegant interface with smooth animations
- **SEO Optimized**: Custom metadata and semantic HTML structure
- **Interactive Components**: Accordion, carousel, forms, and more
- **Theme System**: Light/dark mode support
- **Performance**: Optimized with Next.js 14 and modern build tools
- **Analytics**: Integrated Vercel Analytics for insights

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 14**: React framework with App Router, server-side rendering, and static generation
- **React 18**: Latest React features with concurrent rendering
- **TypeScript**: Type-safe development for better code quality

### Styling & UI
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Shadcn/ui**: High-quality, accessible component library
- **CSS Modules**: Scoped styling for component isolation

### Development Tools
- **ESLint**: Code linting and quality enforcement
- **Prettier**: Code formatting and consistency
- **PostCSS**: CSS processing and optimization

### Deployment & Analytics
- **Vercel**: Hosting platform with automatic deployments
- **Vercel Analytics**: Performance and user behavior insights

## 📁 Project Structure

```
samba-shampoo-landing/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/             # Reusable UI components
│   ├── ui/                # Shadcn/ui components
│   └── theme-provider.tsx # Theme context provider
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
├── public/                 # Static assets
│   └── images/            # Product and brand images
└── styles/                 # Additional styling
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd samba-shampoo-landing
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Responsive Design

The landing page is designed to work seamlessly across all devices:
- **Mobile**: Optimized touch interactions and mobile-first layout
- **Tablet**: Adaptive layouts for medium screens
- **Desktop**: Full-featured experience with enhanced interactions

## 🎨 Component Library

Built with Shadcn/ui components for consistency and accessibility:
- Buttons, forms, and inputs
- Navigation menus and dropdowns
- Cards, modals, and overlays
- Data display components (tables, charts)
- Feedback components (toasts, alerts)

## 🔧 Customization

### Theme Configuration
- Light and dark mode support
- Customizable color schemes
- Responsive typography scales

### Content Management
- Easy product information updates
- Configurable hero sections
- Modular component structure

## 📊 Performance

- **Lighthouse Score**: Optimized for Core Web Vitals
- **Bundle Size**: Minimal JavaScript bundle
- **Image Optimization**: Next.js automatic image optimization
- **Caching**: Efficient static asset caching

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings
3. Deploy automatically on every push

### Manual Deployment
```bash
pnpm build
pnpm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support or questions about this project, please open an issue in the GitHub repository.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
