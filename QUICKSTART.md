# Quick Start Guide

## 🎯 What's Built

Your premium portfolio website is complete and ready to use! Here's what you have:

### ✅ Sections
- **Hero**: Impressive landing with profile image, intro, and CTAs
- **About**: Summary of your experience and core strengths
- **Skills**: Organized tech skills with visual categories
- **Experience**: Galaxy Weblinks Inc. role with detailed responsibilities
- **Projects**: ThinkCEO and ImprintCity with expandable details
- **Education**: SGSITS degree and certification details
- **Services**: What you can build (6 service offerings)
- **Contact**: Full EmailJS integration with form validation
- **Navigation**: Sticky navbar with mobile menu

### ✅ Features
- 🎨 Premium dark theme with blue accents
- 📱 100% responsive (desktop, tablet, mobile)
- ⚡ Fast performance (~77KB gzipped)
- 📧 Working email contact form
- 🎬 Smooth animations and transitions
- ♿ Accessible navigation
- 📄 Resume PDF integration

### ✅ Technology
- React 19.2.8
- Vite 5.4.21
- Framer Motion (animations)
- EmailJS (contact form)
- CSS3 with custom properties

## 🚀 Get Started in 3 Steps

### Step 1: Run Locally
```bash
npm run dev
```
Visit `http://localhost:5173/` and see your portfolio live!

### Step 2: Test Email Form
1. Scroll to Contact section
2. Fill out the form with test data
3. Click "Send Message"
4. Check `shrivastavapranjal81@gmail.com` for the email

✅ If you receive the email, everything works!

### Step 3: Deploy
Choose one of these options:

#### **Netlify** (Easiest)
```bash
# 1. Push to GitHub
git add .
git commit -m "Deploy portfolio"
git push origin main

# 2. Connect on netlify.com
# 3. Add environment variables
# Done! 🚀
```

#### **Vercel**
```bash
npm install -g vercel
vercel
```

#### **GitHub Pages**
```bash
git push origin main
# Enable Pages in Settings → Pages
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## 📝 Customize Your Portfolio

All content is in one file: **`src/data/portfolio.js`**

### Quick Edits
- **Name/Title**: Change `portfolioData.personal`
- **Experience**: Update `portfolioData.experience`
- **Skills**: Modify `portfolioData.skills`
- **Projects**: Edit `portfolioData.projects`
- **Services**: Customize `portfolioData.services`

### Example: Update Your Name
```javascript
// src/data/portfolio.js
personal: {
  name: 'Your Name Here',
  title: 'Your Title',
  email: 'your@email.com',
  // ...
}
```

Changes appear instantly in dev mode!

## 🎨 Change Colors

Edit `src/index.css`:

```css
:root {
  --color-accent: #646cff;        /* Blue buttons */
  --color-bg-primary: #0a0e27;    /* Dark background */
  --color-bg-secondary: #11152d;  /* Card background */
  /* Change these to customize look */
}
```

## 📧 EmailJS Setup

**Already Configured!** Email form is working with:
- Service: `service_9gyhtcj`
- Template: `template_62s1dxv`
- Recipient: `shrivastavapranjal81@gmail.com`

To change recipient or add features, update `Contact.jsx`.

## 📦 What's Included

```
my_portfolio/
├── src/                          # React source code
│   ├── components/               # All UI components
│   ├── data/portfolio.js         # YOUR CONTENT HERE
│   └── index.css                 # Global styles
├── public/assets/
│   ├── IMG_20241227_125747.jpg  # Your profile image
│   └── Pranjal_Shrivastava_Resume.pdf
├── dist/                         # Production build
├── .env                          # EmailJS config
├── package.json                  # Dependencies
├── README.md                      # Full documentation
├── DEPLOYMENT.md                 # Deploy guide
└── QUICKSTART.md                 # This file
```

## 🔧 Available Commands

```bash
npm run dev      # Start development server (http://localhost:5173)
npm run build    # Create production build
npm run preview  # Preview production build locally
```

## ✨ Key Files to Know

| File | Purpose |
|------|---------|
| `src/data/portfolio.js` | All your portfolio content |
| `src/index.css` | Global styles and colors |
| `src/App.jsx` | Main component structure |
| `src/components/sections/*.jsx` | Section components |
| `.env` | EmailJS credentials (never commit!) |

## 🚀 Before Deploying

- [ ] Test contact form works
- [ ] Check mobile responsiveness
- [ ] Verify all links work
- [ ] Update content in `portfolio.js`
- [ ] Test on different browsers
- [ ] Customize colors if desired

## 📱 Mobile Testing

To test on mobile:

```bash
# Terminal shows:
# Local: http://localhost:5173
# Network: http://YOUR_IP:5173

# Open Network URL on your phone
# Test all sections
```

## 🎯 Common Tasks

### Add a New Skill
Edit `src/data/portfolio.js`:
```javascript
skills: {
  frontend: [
    'React.js',
    'Vue.js',
    'Your New Skill' // Add here
  ]
}
```

### Update Project
```javascript
projects: [
  {
    name: 'Your Project',
    description: 'Update this...',
    highlights: ['Add', 'highlights'],
    technologies: ['React', 'TypeScript']
  }
]
```

### Change Theme Color
```css
/* src/index.css */
:root {
  --color-accent: #YOUR_COLOR; /* Change this */
}
```

## 🔐 Security Checklist

- ✅ `.env` is in `.gitignore` (secrets not exposed)
- ✅ No sensitive data in code
- ✅ EmailJS public key only (safe)
- ✅ No backend needed
- ✅ Ready for production

## 💡 Pro Tips

1. **Fast Development**: Use `npm run dev` for hot reload
2. **Test Before Push**: Always run `npm run build` before deploying
3. **Use Preview**: Test production build with `npm run preview`
4. **Monitor Analytics**: Use Netlify/Vercel analytics after deploy
5. **Update Regularly**: Keep projects and skills current

## 🐛 Quick Troubleshooting

**Port 5173 in use?**
```bash
npm run dev -- --port 3000
```

**Email not sending?**
- Check `.env` file exists
- Verify credentials are correct
- Test at emailjs.com/dashboard

**Build fails?**
```bash
rm -rf dist node_modules
npm install
npm run build
```

## 📚 Learn More

- [README.md](./README.md) - Full documentation
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment options
- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [EmailJS Docs](https://www.emailjs.com/docs/)

## 🎉 Next Steps

1. **Test Locally**: `npm run dev`
2. **Customize**: Edit `src/data/portfolio.js`
3. **Deploy**: Choose Netlify, Vercel, or GitHub Pages
4. **Share**: Add link to LinkedIn and resume

---

**Built with ❤️**

Questions? Check README.md for detailed documentation.

Ready to deploy? See DEPLOYMENT.md for step-by-step instructions.

**Happy coding! 🚀**
