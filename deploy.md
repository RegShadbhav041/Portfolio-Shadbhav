# GitHub Pages Deployment Guide

This project is configured to deploy automatically using **GitHub Actions**. Follow these steps to get your portfolio live.

## 1. Prerequisites
- A GitHub account.
- Your project uploaded to a GitHub repository.

## 2. Configuration Check
Open `vite.config.js` and ensure the `base` path matches your repository name:
```javascript
// vite.config.js
export default defineConfig({
  // Replace 'shadbhav-portfolio' with your actual repository name
  base: process.env.GITHUB_PAGES ? "/shadbhav-portfolio/" : "/",
  // ...
})
```

## 3. Enable GitHub Actions Deployment
This is the most important step to avoid seeing the `README.md` file instead of your portfolio.

1. Go to your repository on GitHub.com.
2. Click on the **Settings** tab.
3. Click on **Pages** in the left-hand sidebar.
4. Under **Build and deployment** > **Source**, change the selection from "Deploy from a branch" to **"GitHub Actions"**.

## 4. Deploy Your Changes
Once the settings are updated, push your code to the `main` branch:

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

## 5. Verify Deployment
1. Click on the **Actions** tab in your GitHub repository.
2. You will see a workflow named **"Deploy to GitHub Pages"** running.
3. Once it turns green (Success), your site is live!
4. The URL will be: `https://<your-username>.github.io/<your-repo-name>/`

---

### Troubleshooting
- **Seeing a 404?** Wait 1-2 minutes for GitHub to process the deployment.
- **Refresh gives a 404?** I have included a `404.html` generator in the build script to handle React routing automatically.
- **Styles or Images not loading?** Double-check that the `base` path in `vite.config.js` exactly matches your repository name (including hyphens).
