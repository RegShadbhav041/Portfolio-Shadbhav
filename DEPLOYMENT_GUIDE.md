# Deployment Guide - Shadbhav Regmi Portfolio

This guide provides step-by-step instructions for deploying your professional portfolio to various platforms.

## Recommended: Vercel (GitHub Integration)

**Prerequisites:**
- GitHub account with your portfolio repository
- Vercel account (free tier available)

**Steps:**

1. **Create a Vercel Account**
   - Go to https://vercel.com
   - Sign up with GitHub

2. **Import Your Project**
   - Click "New Project"
   - Select your portfolio repository
   - Vercel auto-detects React + Vite configuration

3. **Configure Build Settings**
   - Build Command: `pnpm build`
   - Output Directory: `dist/public`
   - Install Command: `pnpm install`

4. **Deploy**
   - Click "Deploy"
   - Vercel builds and deploys automatically

5. **Add Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

**Advantages:**
- ✅ Free tier available
- ✅ Automatic deployments on GitHub push
- ✅ Built-in analytics
- ✅ Easy rollbacks
- ✅ Preview deployments

---

### Option 2: Netlify

**Prerequisites:**
- GitHub account
- Netlify account (free tier available)

**Steps:**

1. **Connect GitHub**
   - Go to https://netlify.com
   - Click "New site from Git"
   - Authorize GitHub
   - Select your repository

2. **Configure Build Settings**
   - Build command: `pnpm build`
   - Publish directory: `dist/public`
   - Node version: 18.x

3. **Deploy**
   - Netlify automatically deploys
   - You'll get a live URL instantly

4. **Add Custom Domain**
   - Site settings → Domain management
   - Add custom domain
   - Update DNS records

**Advantages:**
- ✅ Extremely user-friendly
- ✅ Drag-and-drop deployment option
- ✅ Automatic HTTPS
- ✅ Form handling built-in
- ✅ Edge functions available

---

### Option 3: GitHub Pages (Recommended: GitHub Actions)

**Prerequisites:**
- GitHub account
- Repository with portfolio code

**Automated Setup (Recommended):**

I have configured a GitHub Action for you in `.github/workflows/deploy.yml`. This will automatically build and deploy your site whenever you push to the `main` branch.

**Steps to Enable:**

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Fix Vite build and deployment configuration"
   git push origin main
   ```

2. **Configure GitHub Pages Settings (CRITICAL):**
   - Go to your repository on GitHub.
   - Click on **Settings** (top tab).
   - Click on **Pages** (left sidebar).
   - Under **Build and deployment** > **Source**, you **MUST** select **GitHub Actions**.
   - *If you leave it as "Deploy from a branch", it will show your README instead of your portfolio.*

3. **Verify Deployment:**
   - Go to the **Actions** tab in your repository.
   - You should see a "Deploy to GitHub Pages" workflow running.
   - Once it finishes (green checkmark), your site will be live!

**Important Note on URL Paths:**
- If your site is at `username.github.io/your-repo-name/`, and you see a blank page or 404s for assets, you may need to update `base` in `vite.config.js`:
  ```javascript
  // vite.config.js
  export default defineConfig({
    base: "/your-repo-name/", // Update this to match your repository name
    // ...
  })
  ```
- If you are using a **custom domain** (e.g., `www.yourname.com`), the current `base: "/"` setting is perfect.

---

### Option 4: Manual GitHub Pages Deployment (Legacy)

**For AWS, Google Cloud, Azure, or DigitalOcean**

**Create Dockerfile:**

```dockerfile
FROM node:18-alpine as builder
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install
COPY . .
RUN pnpm build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./
RUN npm install -g pnpm && pnpm install --prod
EXPOSE 3000
CMD ["node", "dist/index.js"]
```

**Build and Deploy:**

```bash
# Build Docker image
docker build -t shadbhav-portfolio .

# Run locally
docker run -p 3000:3000 shadbhav-portfolio

# Push to Docker Hub
docker tag shadbhav-portfolio yourusername/shadbhav-portfolio
docker push yourusername/shadbhav-portfolio
```

---

## Custom Domain Setup

### Using Vercel with Custom Domain

1. Purchase domain from:
   - Namecheap
   - GoDaddy
   - Google Domains
   - Any registrar

2. In Vercel:
   - Project Settings → Domains
   - Add your domain
   - Copy the nameservers

3. In Domain Registrar:
   - Update nameservers to Vercel's
   - Wait 24-48 hours for propagation

### Using Netlify with Custom Domain

1. Purchase domain (same registrars as above)

2. In Netlify:
   - Site settings → Domain management
   - Add custom domain
   - Netlify provides DNS records

3. In Domain Registrar:
   - Add DNS records from Netlify
   - Or update nameservers

---

## Environment Variables

If you need to add environment variables (for future API integrations):

**Create `.env.local` file:**
```
VITE_API_URL=https://api.example.com
VITE_ANALYTICS_ID=your-analytics-id
```

**In Vercel/Netlify:**
1. Go to Project Settings
2. Find Environment Variables section
3. Add your variables
4. Redeploy

---

## Post-Deployment Checklist

After deploying, verify everything works:

- [ ] Site loads without errors
- [ ] Navigation links work
- [ ] "Get In Touch" button opens Gmail
- [ ] GitHub links open correctly
- [ ] LinkedIn profile link works
- [ ] Mobile responsive design works
- [ ] Images load properly
- [ ] Animations are smooth
- [ ] Contact form functionality (if added)
- [ ] SSL certificate is valid (HTTPS)

---

## Monitoring & Analytics

### Add Google Analytics (Optional)

1. Create Google Analytics account
2. Get your Measurement ID
3. Add to `client/index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Monitor Performance

- **Vercel**: Built-in analytics dashboard
- **Netlify**: Analytics tab in site settings
- **Google Analytics**: Detailed visitor insights

---

## Troubleshooting

### Site Not Loading
- Check build logs in deployment platform
- Verify environment variables are set
- Ensure all dependencies are installed

### Images Not Showing
- Verify image URLs are correct
- Check if images are in correct folder
- Use absolute URLs for external images

### Styling Issues
- Clear browser cache (Ctrl+Shift+Delete)
- Rebuild the project
- Check CSS file is being loaded

### Email Button Not Working
- Verify email format in code
- Check browser's email client is configured
- Test on different browsers

---

## Updating Your Portfolio

After deployment, to make updates:

1. **Make Changes Locally**
   ```bash
   # Edit files
   pnpm dev  # Test changes
   ```

2. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

3. **Automatic Deployment**
   - Vercel/Netlify automatically redeploy
   - Changes live within 1-2 minutes

---

## Support & Resources

- **React Documentation**: https://react.dev
- **Vite Documentation**: https://vitejs.dev
- **Tailwind CSS Documentation**: https://tailwindcss.com
- **React Documentation**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **Vite Guide**: https://vitejs.dev
- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com

---

**Need Help?**
- Check the PORTFOLIO_README.md for more details
- Review the source code comments
- Test locally with `pnpm dev` before deploying

Good luck with your portfolio deployment! 🚀
