# Deployment Guide - Pranjal Shrivastava Portfolio

This guide covers deployment options for your premium portfolio website.

## Quick Deployment Options

### 1. Netlify (Easiest)

#### Option A: Deploy from GitHub

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/My-Portfolio.git
   git push -u origin main
   ```

2. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select GitHub and authorize
   - Choose your repository
   - Build settings are auto-configured (netlify.toml)

3. **Add Environment Variables**:
   - In Netlify dashboard, go to Site Settings → Environment
   - Add the following variables:
     ```
     VITE_EMAILJS_SERVICE_ID = service_9gyhtcj
     VITE_EMAILJS_TEMPLATE_ID = template_62s1dxv
     VITE_EMAILJS_PUBLIC_KEY = viX5ETnK1TJzC-yKA
     ```

4. **Deploy**:
   - Netlify automatically deploys on every push to main
   - Your site will be live at `your-site.netlify.app`

#### Option B: Deploy from `dist` Folder

1. **Build locally**:
   ```bash
   npm run build
   ```

2. **Drag and drop**:
   - Go to [netlify.com/drop](https://netlify.com/drop)
   - Drag the `dist` folder onto the page
   - Site will be live at a random netlify.app URL

### 2. Vercel (Recommended for Next.js Users)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Project settings are auto-detected

3. **Add Environment Variables**:
   - Project Settings → Environment Variables
   - Add:
     ```
     VITE_EMAILJS_SERVICE_ID = service_9gyhtcj
     VITE_EMAILJS_TEMPLATE_ID = template_62s1dxv
     VITE_EMAILJS_PUBLIC_KEY = viX5ETnK1TJzC-yKA
     ```

4. **Deploy**:
   - Click "Deploy"
   - Site will be live at your-project.vercel.app

### 3. GitHub Pages

#### Setup GitHub Actions Deployment

1. **Create `.github/workflows/deploy.yml`**:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         
         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '18'
         
         - name: Install dependencies
           run: npm ci
         
         - name: Build
           env:
             VITE_EMAILJS_SERVICE_ID: ${{ secrets.VITE_EMAILJS_SERVICE_ID }}
             VITE_EMAILJS_TEMPLATE_ID: ${{ secrets.VITE_EMAILJS_TEMPLATE_ID }}
             VITE_EMAILJS_PUBLIC_KEY: ${{ secrets.VITE_EMAILJS_PUBLIC_KEY }}
           run: npm run build
         
         - name: Deploy
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

2. **Update vite.config.js**:
   ```js
   export default defineConfig({
     base: '/My-Portfolio/',  // if using project pages
     // or base: '/' if using user/org pages
     plugins: [react()],
     // ...
   })
   ```

3. **Add GitHub Secrets**:
   - Go to Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Add:
     - `VITE_EMAILJS_SERVICE_ID`
     - `VITE_EMAILJS_TEMPLATE_ID`
     - `VITE_EMAILJS_PUBLIC_KEY`

4. **Enable Pages**:
   - Go to Settings → Pages
   - Select "Deploy from a branch"
   - Choose `gh-pages` branch
   - Site will be live at `username.github.io/My-Portfolio`

### 4. Traditional Hosting (cPanel, etc.)

1. **Build locally**:
   ```bash
   npm run build
   ```

2. **Upload `dist` folder**:
   - Via FTP/SFTP or file manager
   - Upload contents of `dist` folder to `public_html` or equivalent

3. **Set Environment Variables**:
   - Create `.env` file in root or set via hosting provider
   - Include EmailJS credentials

4. **Configure Server** (if needed):
   - For SPA routing, redirect all requests to `index.html`
   - Nginx: Add try_files directive
   - Apache: Use .htaccess

### 5. Docker Deployment

1. **Create Dockerfile**:
   ```dockerfile
   # Build stage
   FROM node:18 AS builder
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci
   COPY . .
   RUN npm run build

   # Production stage
   FROM node:18
   WORKDIR /app
   RUN npm install -g serve
   COPY --from=builder /app/dist ./dist
   ENV VITE_EMAILJS_SERVICE_ID=service_9gyhtcj
   ENV VITE_EMAILJS_TEMPLATE_ID=template_62s1dxv
   ENV VITE_EMAILJS_PUBLIC_KEY=viX5ETnK1TJzC-yKA
   EXPOSE 3000
   CMD ["serve", "-s", "dist", "-l", "3000"]
   ```

2. **Build and run**:
   ```bash
   docker build -t portfolio .
   docker run -p 3000:3000 portfolio
   ```

## Custom Domain Setup

### Netlify
1. Go to Site Settings → Domain Management
2. Click "Add custom domain"
3. Add your domain (e.g., `pranjal-dev.com`)
4. Update DNS records or use Netlify DNS
5. Enable HTTPS (automatic)

### Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Follow DNS configuration instructions
4. HTTPS is automatic

### GitHub Pages
1. Add domain to Settings → Pages
2. Update DNS records:
   ```
   A record: 185.199.108.153
   A record: 185.199.109.153
   A record: 185.199.110.153
   A record: 185.199.111.153
   CNAME: username.github.io
   ```

## Environment Variables Reference

Required for EmailJS contact form:

| Variable | Value |
|----------|-------|
| `VITE_EMAILJS_SERVICE_ID` | `service_9gyhtcj` |
| `VITE_EMAILJS_TEMPLATE_ID` | `template_62s1dxv` |
| `VITE_EMAILJS_PUBLIC_KEY` | `viX5ETnK1TJzC-yKA` |

⚠️ **Important**: Always use `.env` for local development. Never commit to Git.

## Verifying Deployment

After deployment, verify:

- [ ] Site loads without errors
- [ ] Contact form sends emails
- [ ] Images load correctly
- [ ] Resume PDF opens in new tab
- [ ] Navigation links work
- [ ] Mobile responsive
- [ ] Social links work
- [ ] No console errors

### Test Contact Form

1. Visit your deployed site
2. Scroll to Contact section
3. Fill out form with test data
4. Submit
5. Check `shrivastavapranjal81@gmail.com` for email

## Troubleshooting Deployment

### Build Fails
```bash
# Clear cache
rm -rf dist node_modules package-lock.json
npm install
npm run build
```

### EmailJS Not Working
- Verify environment variables are set
- Check browser console for errors
- Ensure no typos in credentials
- Test at https://emailjs.com/dashboard

### Assets Not Found
- Verify public/assets folder exists
- Check file paths in code
- Ensure image/PDF are in public folder
- Rebuild and redeploy

### Custom Domain Issues
- Wait 24-48 hours for DNS propagation
- Verify DNS records with `nslookup`
- Check hosting provider documentation

## Performance Optimization

### Before Deploying
- [ ] Run `npm run build`
- [ ] Test with `npm run preview`
- [ ] Check Lighthouse score
- [ ] Test on slow 4G network
- [ ] Test on mobile devices

### Monitoring
- Use Netlify Analytics (free)
- Monitor in Vercel dashboard
- Set up error tracking (Sentry)
- Monitor EmailJS sending

## Continuous Deployment

### GitHub Actions
Automatically deploy on every push to main:
1. Push to GitHub
2. GitHub Actions runs tests/build
3. Automatically deploys to Netlify/Vercel

### Rollback
If something breaks:
```bash
git revert HEAD
git push
```

Deployment will automatically revert.

## Cost Breakdown

| Platform | Cost | Notes |
|----------|------|-------|
| Netlify | Free | $11+/mo for pro (optional) |
| Vercel | Free | Generous free tier |
| GitHub Pages | Free | Only for GitHub users |
| Traditional | Varies | Usually $5-10/month |
| Docker | Varies | $5-30/month depending on provider |

## Recommended Setup

**For beginners**: Netlify (easiest, free, great for portfolios)
**For scaling**: Vercel (excellent performance, automatic optimizations)
**For learning**: GitHub Pages (free, easy integration with GitHub)
**For control**: Traditional hosting (more options, more responsibility)

## Support & Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Pages Guide](https://pages.github.com/)
- [EmailJS Help](https://www.emailjs.com/docs/)

---

Happy deploying! 🚀
