# Shadbhav Regmi - Professional Portfolio

A modern, responsive portfolio website showcasing full-stack development expertise, agricultural technology projects, and professional interests.

## 🎨 Design Philosophy

**Modern Minimalist + Agricultural Heritage**

This portfolio combines clean, breathing layouts with agricultural symbolism, reflecting the developer's unique background in both technology and agriculture.

### Color Palette
- **Primary**: Deep Forest Green (#2E7D32) - Growth and sustainability
- **Secondary**: Warm Cream (#F5F1E8) - Natural, inviting background
- **Accent**: Harvest Gold (#F9A825) - Energy and warmth
- **Text**: Charcoal (#2C2C2C) - Professional readability

### Typography
- **Headings**: Playfair Display (Serif) - Elegant, academic
- **Body**: Poppins (Sans-serif) - Modern, friendly
- **Code**: IBM Plex Mono (Monospace) - Technical clarity

## 📋 Features

### Sections
1. **Navigation Bar** - Sticky navigation with quick access to all sections
2. **Hero Section** - Professional introduction with call-to-action buttons
3. **Projects Showcase** - Featured projects with descriptions, technologies, and impact metrics
4. **Skills Section** - Organized by category with visual icons
5. **Interests Section** - Fields of passion including vibe coding
6. **About Section** - Personal background and professional philosophy
7. **Contact Section** - Multiple contact methods with Gmail integration
8. **Footer** - Professional closing with copyright information

### Key Features
- ✅ Fully Responsive Design (Mobile, Tablet, Desktop)
- ✅ Gmail Integration - "Get In Touch" button opens Gmail with pre-filled recipient
- ✅ Smooth Animations - Scroll-triggered animations and hover effects
- ✅ Professional Styling - Consistent design system throughout
- ✅ SEO Optimized - Semantic HTML and proper meta tags
- ✅ Accessibility - WCAG compliant with proper contrast ratios
- ✅ Fast Performance - Optimized images and efficient code

## 🚀 Deployment

### Prerequisites
- Node.js 18+ installed
- pnpm package manager

### Local Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Deployment Options

#### Option 1: Vercel (Recommended)
1. Push your code to GitHub.
2. Connect your repository to Vercel.
3. Vercel will automatically detect the Vite configuration and deploy your portfolio.

#### Option 2: Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Option 3: Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist/public
```

#### Option 4: GitHub Pages
```bash
# Build the project
pnpm build

# Push to GitHub
git add .
git commit -m "Deploy portfolio"
git push origin main
```

## 📧 Email Configuration

The portfolio includes Gmail integration for the contact button. When users click "Get In Touch" or "Send Email", it opens their default email client with:
- **Recipient**: shadbhavregmi123@gmail.com
- **Subject**: Pre-filled with "Let's Connect"
- **Body**: Pre-filled with a professional greeting

To customize the email recipient, edit the `handleEmailClick` function in `client/src/pages/Home.tsx`:

```typescript
const handleEmailClick = () => {
  window.location.href = "mailto:your-email@gmail.com?subject=Let's%20Connect&body=Hi%20Shadbhav,%0A%0AI'd%20like%20to%20discuss%20an%20opportunity%20with%20you.";
};
```

## 📸 Adding Your LinkedIn Photo

To add your LinkedIn profile photo:

1. Download your LinkedIn profile photo
2. Upload it to the static assets folder
3. Update the image URL in the hero section

In `client/src/pages/Home.tsx`, replace the skills illustration with your photo:

```tsx
<img
  src="your-photo-url-here"
  alt="Shadbhav Regmi"
  className="w-full h-full object-cover rounded-2xl"
/>
```

## 🛠️ Technology Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: pnpm

## 📁 Project Structure

```
client/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components
│   ├── contexts/        # React contexts
│   ├── hooks/           # Custom hooks
│   ├── lib/             # Utility functions
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
└── vite.config.ts       # Vite configuration
```

## 🎯 Projects Showcased

### 1. PotatoDoc
- **Type**: Final Year Project
- **Tech**: TypeScript, React Native, Supabase, Drizzle ORM
- **Impact**: AI-powered disease diagnosis with 95%+ accuracy
- **GitHub**: https://github.com/RegShadbhav041/PotatoDoc

### 2. Ecommerce-NepalCart
- **Type**: Production E-commerce Platform
- **Tech**: PHP, JavaScript, MySQL, Tailwind CSS
- **Impact**: Complete marketplace solution with seller dashboard
- **GitHub**: https://github.com/RegShadbhav041/Ecommerce-NepalCart

### 3. AgriSathi
- **Type**: Agricultural Technology Platform
- **Tech**: HTML, CSS, JavaScript, Responsive Design
- **Impact**: Connects farmers with resources and best practices
- **GitHub**: https://github.com/RegShadbhav041/AgriSathi

### 4. Recipe Management System
- **Type**: Backend Project
- **Tech**: PHP, MySQL, Database Design
- **Impact**: Scalable recipe management with user profiles
- **GitHub**: https://github.com/RegShadbhav041/Recipe_Management_System

## 🎓 Skills & Expertise

### Frontend Development
React, TypeScript, Tailwind CSS, HTML/CSS, JavaScript, Responsive Design

### Backend Development
PHP, Node.js, MySQL, Database Design, API Development, REST APIs

### Cloud & DevOps
AWS Services, EC2, S3, DevOps Fundamentals, Git, Linux

### Design & Research
UI/UX Design, Figma, Technical Documentation, Vibe Coding, Research

## 🌱 Fields of Interest

- Full-Stack Development
- Agricultural Technology
- UI/UX Design
- Vibe Coding (Writing code with flow and aesthetics)
- Cloud Architecture
- Technical Documentation

## 📞 Contact Information

- **Email**: shadbhavregmi123@gmail.com
- **GitHub**: https://github.com/RegShadbhav041
- **LinkedIn**: https://linkedin.com/in/shadbhav-regmi-10310b408
- **Location**: Pokhara, Nepal
- **Education**: Gandaki University - IT Student

## 📄 License

This portfolio is open source and available under the MIT License.

## 🙏 Acknowledgments

Built with React, TypeScript, Tailwind CSS, and a passion for creating beautiful, functional web experiences.

---

**Last Updated**: May 25, 2026
**Portfolio Version**: 2.0 (Enhanced Professional Edition)
