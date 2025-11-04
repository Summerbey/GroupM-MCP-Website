# 🚀 Deployment Guide - MCP Group M Website

This guide will help you deploy your MCP website to GitHub Pages.

## Prerequisites

- Git installed on your computer
- GitHub account
- Node.js and npm installed

## Step-by-Step Deployment

### 1. Prepare Your Repository

First, create a new repository on GitHub:

1. Go to https://github.com/new
2. Repository name: `mcp-group-m` (or your preferred name)
3. Description: "Model Context Protocol Educational Website - Group M"
4. Make it **Public**
5. **Do NOT** initialize with README (we have one already)
6. Click **Create repository**

### 2. Update vite.config.js

**IMPORTANT:** Open `vite.config.js` and change the base URL to match your repository name:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/mcp-group-m/',  // Change this to your repo name!
})
```

If your repository is named differently, update this value accordingly.

### 3. Initialize Git and Push

Open terminal in your project directory and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: MCP Group M website"

# Add your GitHub repository as remote (replace with your URL)
git remote add origin https://github.com/YOUR-USERNAME/mcp-group-m.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 4. Install Dependencies

```bash
npm install
```

### 5. Build the Site

```bash
npm run build
```

This creates a `dist` folder with your production-ready website.

### 6. Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
- Build your site
- Create a `gh-pages` branch
- Push the built files to that branch

### 7. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top right)
3. Click on **Pages** (left sidebar)
4. Under "Source", select:
   - Branch: **gh-pages**
   - Folder: **/ (root)**
5. Click **Save**

### 8. Wait and Visit

GitHub Pages takes 1-3 minutes to deploy. Your site will be available at:

```
https://YOUR-USERNAME.github.io/mcp-group-m/
```

## Updating Your Site

When you make changes:

```bash
# 1. Make your changes
# 2. Add and commit
git add .
git commit -m "Description of changes"

# 3. Push to GitHub
git push

# 4. Rebuild and redeploy
npm run build
npm run deploy
```

## Troubleshooting

### Problem: 404 Error

**Solution:** Check that:
1. `vite.config.js` has the correct `base` URL matching your repo name
2. GitHub Pages is enabled and set to `gh-pages` branch
3. Wait a few more minutes (deployment takes time)

### Problem: Blank Page

**Solution:**
1. Check browser console for errors
2. Verify the `base` URL in `vite.config.js` matches your repository name exactly
3. Rebuild and redeploy: `npm run build && npm run deploy`

### Problem: CSS/JavaScript Not Loading

**Solution:**
- The `base` URL is incorrect. It must match your repository name exactly.
- Update `vite.config.js` and redeploy.

### Problem: "Permission denied" when pushing

**Solution:**
- You may need to authenticate with GitHub
- Use GitHub CLI: `gh auth login`
- Or set up SSH keys: https://docs.github.com/en/authentication

## Custom Domain (Optional)

To use a custom domain:

1. Create a file named `CNAME` in the `public` folder (create `public` if it doesn't exist)
2. Add your domain name to the file: `yourdomain.com`
3. Follow GitHub's custom domain setup: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## Verifying Deployment

After deployment, test these pages:

- ✅ Welcome page: `https://yoursite.github.io/repo-name/`
- ✅ Home: `https://yoursite.github.io/repo-name/home`
- ✅ Presentation: `https://yoursite.github.io/repo-name/presentation`
- ✅ Tutorial: `https://yoursite.github.io/repo-name/tutorial`
- ✅ Code Explanation: `https://yoursite.github.io/repo-name/code-explanation`

## GitHub Pages Settings Screenshot Checklist

When configuring GitHub Pages, you should see:

```
Source
├── Branch: gh-pages
└── Folder: / (root)

[Save button]

✅ Your site is live at https://username.github.io/repo-name/
```

## Additional Tips

### Enable HTTPS

GitHub Pages automatically provides HTTPS. Make sure "Enforce HTTPS" is checked in your Pages settings.

### View Build Logs

If deployment fails:
1. Go to your repository
2. Click **Actions** tab
3. Check the latest workflow run for errors

### Local Testing Before Deploy

Always test locally before deploying:

```bash
npm run build
npm run preview
```

Visit `http://localhost:4173` to preview your production build locally.

## Support

If you encounter issues:

1. Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Verify all steps in this guide
3. Check browser console for JavaScript errors
4. Review the tutorial code to ensure all files are present

## Success Checklist

Before submitting your coursework, verify:

- ✅ All 5 pages are accessible and load correctly
- ✅ Navigation works between pages
- ✅ Code blocks display properly with syntax highlighting
- ✅ Tutorial code is available and documented
- ✅ Site is mobile-responsive
- ✅ No console errors in browser
- ✅ GitHub repository is public and accessible
- ✅ README.md is comprehensive

---

**Congratulations!** Your MCP website is now live on GitHub Pages! 🎉

Submit the GitHub Pages URL to your coursework submission on Aula.
