# Pactium Website

Building intelligent products that scale Africa.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js + React Three Fiber
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **UI Components**: Radix UI
- **Maps**: Leaflet
- **Icons**: Lucide React

## 📁 Project Structure
```
pactium-website/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── ventures/
│   │   ├── page.tsx
│   │   ├── legalbro/
│   │   │   └── page.tsx
│   │   ├── semma/
│   │   │   └── page.tsx
│   │   └── movva/
│   │       └── page.tsx
│   ├── solutions/
│   │   ├── page.tsx
│   │   ├── ngos/
│   │   ├── lawfirms/
│   │   └── farmers/
│   ├── impact/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── careers/
│   │   └── page.tsx
│   ├── blog/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── BackgroundAnimation.tsx
│   ├── ValueBlocks.tsx
│   ├── FeaturedVentures.tsx
│   ├── HowWeWork.tsx
│   ├── CaseStudyHighlight.tsx
│   └── Newsletter.tsx
├── public/
│   ├── team/
│   ├── ventures/
│   └── impact/
├── .env.local
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/pactium-website.git
cd pactium-website
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

4. **Run development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Building for Production
```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📄 Page Routes

- `/` - Homepage
- `/about` - About Pactium
- `/ventures` - All ventures overview
- `/ventures/legalbro` - LegalBro venture page
- `/ventures/semma` - Semma AI venture page
- `/ventures/movva` - Movva venture page
- `/solutions` - Solutions overview
- `/solutions/ngos` - For NGOs & Governments
- `/solutions/lawfirms` - For Law Firms
- `/solutions/farmers` - For Farmers
- `/impact` - Impact & Case Studies
- `/contact` - Contact form
- `/careers` - Job listings
- `/blog` - Blog & resources

## 🎨 Design System

### Colors
- **Primary Gradient**: `#00C6FF → #0072FF`
- **Dark Background**: `#041027`
- **Accent Cyan**: `#00E0FF`
- **Silver**: `#D0D6DD`
- **Success**: `#2DD4BF`
- **Warning**: `#FFB020`

### Typography
- **Headings**: Inter/Poppins (Bold)
- **Body**: Source Sans Pro/Roboto

### Spacing
- Base unit: 16px (1rem)
- Container max-width: 1200px

## 🔧 Configuration

### Tailwind Configuration
Custom colors, gradients, and utilities are defined in `tailwind.config.ts`

### Next.js Configuration
SEO, image optimization, and build settings in `next.config.js`

## 📊 Analytics & Tracking

### Google Analytics (Optional)
Add your GA4 measurement ID to `.env.local`:
```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Plausible (Optional)
```bash
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=pactium.africa
```

## 🔒 Security & Privacy

- All forms include data consent checkboxes
- Privacy policy and terms of service pages
- HTTPS enforced in production
- No client-side storage of sensitive data
- Rate limiting on API routes (recommended)

## 📝 Content Management

### Adding Team Members
Edit `app/about/page.tsx` and update the `team` array:
```typescript
const team = [
  {
    name: 'Your Name',
    role: 'Co-Founder & CEO',
    image: '/team/your-photo.jpg',
    bio: 'Your bio here.',
  },
]
```

### Adding New Ventures
1. Create new page: `app/ventures/your-venture/page.tsx`
2. Add to ventures list in `app/ventures/page.tsx`
3. Add to navigation if needed

### Adding Blog Posts
1. Create markdown files in `content/blog/` (if using MDX)
2. Or create dynamic pages in `app/blog/[slug]/page.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy
```bash
# Or use Vercel CLI
vercel --prod
```

### Other Platforms
- **Netlify**: Configure build command: `npm run build`
- **AWS Amplify**: Use Next.js SSR configuration
- **DigitalOcean**: Deploy with Docker

## 🧪 Testing
```bash
# Run linting
npm run lint

# Type checking
npm run type-check
```

## 📱 PWA Support (Optional)

To add Progressive Web App capabilities:
```bash
npm install next-pwa
```

Configure in `next.config.js`

## 🌍 Internationalization (Future)

For multi-language support, consider:
- next-intl
- react-i18next

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

Proprietary - All Rights Reserved © 2025 Pactium

## 📞 Support

- Email: hello@pactium.africa
- Website: https://pactium.africa
- Documentation: https://docs.pactium.africa

## ✅ Launch Checklist

- [ ] Logo and brand assets uploaded to `/public`
- [ ] Team photos added to `/public/team/`
- [ ] Demo videos uploaded (YouTube/Vimeo)
- [ ] Environment variables configured
- [ ] Analytics tracking setup
- [ ] Contact form API endpoint configured
- [ ] SEO meta tags verified
- [ ] Open Graph images created
- [ ] Accessibility audit completed
- [ ] Mobile responsiveness tested
- [ ] Performance optimization (Lighthouse score 90+)
- [ ] Privacy policy and terms pages completed
- [ ] SSL certificate configured
- [ ] Custom domain connected
- [ ] CDN configured (if needed)
- [ ] Backup strategy implemented
- [ ] Monitoring setup (Sentry, etc.)

## 🎯 Performance Goals

- Lighthouse Performance: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)

---

Built with ❤️ by Pactium# Pactium Website

Building intelligent products that scale Africa.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js + React Three Fiber
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **UI Components**: Radix UI
- **Maps**: Leaflet
- **Icons**: Lucide React

## 📁 Project Structure
```
pactium-website/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── ventures/
│   │   ├── page.tsx
│   │   ├── legalbro/
│   │   │   └── page.tsx
│   │   ├── semma/
│   │   │   └── page.tsx
│   │   └── movva/
│   │       └── page.tsx
│   ├── solutions/
│   │   ├── page.tsx
│   │   ├── ngos/
│   │   ├── lawfirms/
│   │   └── farmers/
│   ├── impact/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── careers/
│   │   └── page.tsx
│   ├── blog/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── BackgroundAnimation.tsx
│   ├── ValueBlocks.tsx
│   ├── FeaturedVentures.tsx
│   ├── HowWeWork.tsx
│   ├── CaseStudyHighlight.tsx
│   └── Newsletter.tsx
├── public/
│   ├── team/
│   ├── ventures/
│   └── impact/
├── .env.local
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/pactium-website.git
cd pactium-website
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

4. **Run development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Building for Production
```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📄 Page Routes

- `/` - Homepage
- `/about` - About Pactium
- `/ventures` - All ventures overview
- `/ventures/legalbro` - LegalBro venture page
- `/ventures/semma` - Semma AI venture page
- `/ventures/movva` - Movva venture page
- `/solutions` - Solutions overview
- `/solutions/ngos` - For NGOs & Governments
- `/solutions/lawfirms` - For Law Firms
- `/solutions/farmers` - For Farmers
- `/impact` - Impact & Case Studies
- `/contact` - Contact form
- `/careers` - Job listings
- `/blog` - Blog & resources

## 🎨 Design System

### Colors
- **Primary Gradient**: `#00C6FF → #0072FF`
- **Dark Background**: `#041027`
- **Accent Cyan**: `#00E0FF`
- **Silver**: `#D0D6DD`
- **Success**: `#2DD4BF`
- **Warning**: `#FFB020`

### Typography
- **Headings**: Inter/Poppins (Bold)
- **Body**: Source Sans Pro/Roboto

### Spacing
- Base unit: 16px (1rem)
- Container max-width: 1200px

## 🔧 Configuration

### Tailwind Configuration
Custom colors, gradients, and utilities are defined in `tailwind.config.ts`

### Next.js Configuration
SEO, image optimization, and build settings in `next.config.js`

## 📊 Analytics & Tracking

### Google Analytics (Optional)
Add your GA4 measurement ID to `.env.local`:
```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Plausible (Optional)
```bash
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=pactium.africa
```

## 🔒 Security & Privacy

- All forms include data consent checkboxes
- Privacy policy and terms of service pages
- HTTPS enforced in production
- No client-side storage of sensitive data
- Rate limiting on API routes (recommended)

## 📝 Content Management

### Adding Team Members
Edit `app/about/page.tsx` and update the `team` array:
```typescript
const team = [
  {
    name: 'Your Name',
    role: 'Co-Founder & CEO',
    image: '/team/your-photo.jpg',
    bio: 'Your bio here.',
  },
]
```

### Adding New Ventures
1. Create new page: `app/ventures/your-venture/page.tsx`
2. Add to ventures list in `app/ventures/page.tsx`
3. Add to navigation if needed

### Adding Blog Posts
1. Create markdown files in `content/blog/` (if using MDX)
2. Or create dynamic pages in `app/blog/[slug]/page.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy
```bash
# Or use Vercel CLI
vercel --prod
```

### Other Platforms
- **Netlify**: Configure build command: `npm run build`
- **AWS Amplify**: Use Next.js SSR configuration
- **DigitalOcean**: Deploy with Docker

## 🧪 Testing
```bash
# Run linting
npm run lint

# Type checking
npm run type-check
```

## 📱 PWA Support (Optional)

To add Progressive Web App capabilities:
```bash
npm install next-pwa
```

Configure in `next.config.js`

## 🌍 Internationalization (Future)

For multi-language support, consider:
- next-intl
- react-i18next

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

Proprietary - All Rights Reserved © 2025 Pactium

## 📞 Support

- Email: hello@pactium.africa
- Website: https://pactium.africa
- Documentation: https://docs.pactium.africa

## ✅ Launch Checklist

- [ ] Logo and brand assets uploaded to `/public`
- [ ] Team photos added to `/public/team/`
- [ ] Demo videos uploaded (YouTube/Vimeo)
- [ ] Environment variables configured
- [ ] Analytics tracking setup
- [ ] Contact form API endpoint configured
- [ ] SEO meta tags verified
- [ ] Open Graph images created
- [ ] Accessibility audit completed
- [ ] Mobile responsiveness tested
- [ ] Performance optimization (Lighthouse score 90+)
- [ ] Privacy policy and terms pages completed
- [ ] SSL certificate configured
- [ ] Custom domain connected
- [ ] CDN configured (if needed)
- [ ] Backup strategy implemented
- [ ] Monitoring setup (Sentry, etc.)

## 🎯 Performance Goals

- Lighthouse Performance: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)

---

Built with ❤️ by Pactium