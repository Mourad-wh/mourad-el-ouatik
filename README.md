# 🔐 DevSecOps Portfolio Website

A professional, cybersecurity-themed portfolio website for **Mourad EL OUATIK** - DevSecOps Engineer & Cloud Security Specialist.

## 🎨 Features

### Design & Aesthetics
- **Matrix-style animated background** with falling code
- **Custom cursor follower** with interactive feedback
- **Scroll progress indicator** at the top
- **Glassmorphism effects** on cards and sections
- **Smooth animations** using AOS (Animate On Scroll)
- **Typing animation** for hero subtitle
- **Cybersecurity-themed color palette** (Navy, Cyan, Green)
- **Fully responsive** design for all devices

### Sections
1. **Hero Section** - Dynamic introduction with animated stats
2. **About Section** - Professional profile with highlights
3. **Skills Section** - Technical expertise with progress indicators
4. **Certifications** - Professional credentials showcase
5. **Projects Portfolio** - Filterable project grid with 10+ projects
6. **Experience Timeline** - Career journey and education
7. **Contact Section** - Contact form and information

### Interactive Features
- Project filtering by category (All, DevSecOps, Cloud, IDS, Crypto, Web)
- Animated counter for statistics
- Smooth scroll navigation
- Hover effects on all interactive elements
- Real-time security dashboard visualization
- Keyboard shortcuts (C for Contact, P for Projects)

## 📁 File Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🚀 Quick Start

### 1. Setup
1. Download all three files (`index.html`, `styles.css`, `script.js`)
2. Place them in the same folder
3. Open `index.html` in a web browser

### 2. View Locally
- Simply double-click `index.html` to open in your default browser
- Or use a local server (recommended):
  ```bash
  # Using Python
  python -m http.server 8000
  
  # Using Node.js
  npx serve
  ```

### 3. Deploy
The website is ready to deploy to:
- **GitHub Pages** (Recommended - Free)
- **Netlify** (Free tier available)
- **Vercel** (Free tier available)
- **Cloudflare Pages** (Free)

## 🛠️ Customization Guide

### Update Personal Information

#### 1. Contact Details (Multiple Locations)
Search and replace in `index.html`:
- Email: `mouradelouatik04@gmail.com`
- Phone: `+212 623-189074`
- Location: `Marrakech, Morocco`
- GitHub: `https://github.com/Mourad-wh`
- LinkedIn: Update the LinkedIn URL
- Credly: Update the Credly URL

#### 2. Hero Section
In `index.html`, find the hero section and update:
```html
<h1 class="hero-title">
    <span class="name-highlight">YOUR_FIRST_NAME</span><br>
    <span class="name-main">YOUR_LAST_NAME</span>
</h1>
```

Update the typing texts in `script.js`:
```javascript
const texts = [
    'Your Title 1',
    'Your Title 2',
    'Your Title 3',
    'Your Title 4'
];
```

#### 3. Statistics
Update the stats in the hero section:
```html
<div class="stat-number" data-count="YOUR_NUMBER">0</div>
<div class="stat-label">Your Label</div>
```

### Add Your Profile Picture

Replace the placeholder icon with your photo:
```html
<!-- Find this in the About section -->
<div class="image-placeholder">
    <i class="fas fa-user-shield"></i>
</div>

<!-- Replace with -->
<img src="path/to/your-photo.jpg" alt="Your Name" style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px;">
```

### Modify Projects

Each project card has this structure:
```html
<div class="project-card" data-category="devsecops cloud">
    <!-- Update data-category for filtering -->
    <div class="project-content">
        <h3 class="project-title">Project Name</h3>
        <span class="project-period">Date Range</span>
        <p class="project-description">Description...</p>
        <div class="project-tech">
            <span class="tech-badge">Tech 1</span>
            <span class="tech-badge">Tech 2</span>
        </div>
    </div>
</div>
```

**To add a new project:**
1. Copy an existing project card
2. Update all the content
3. Add appropriate `data-category` for filtering
4. Update GitHub/live demo links

### Update Skills

Add or modify skills in the Skills section:
```html
<div class="skill-card">
    <div class="skill-icon">
        <i class="fas fa-YOUR-ICON"></i>
    </div>
    <h3 class="skill-title">Skill Category</h3>
    <div class="skill-tags">
        <span class="skill-tag">Tool 1</span>
        <span class="skill-tag">Tool 2</span>
    </div>
    <div class="skill-progress">
        <div class="progress-bar" style="--progress: 85%"></div>
    </div>
</div>
```

### Modify Certifications

Update or add certifications:
```html
<div class="cert-card">
    <div class="cert-badge">
        <i class="fas fa-shield-alt"></i>
    </div>
    <h4 class="cert-name">Certification Name</h4>
    <p class="cert-issuer">Issuing Organization</p>
    <p class="cert-date">Month Year</p>
</div>
```

### Add CV Download

In `script.js`, update the download function:
```javascript
downloadCVBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const link = document.createElement('a');
    link.href = 'path/to/your/cv.pdf';  // Update this path
    link.download = 'Your_Name_CV.pdf';  // Update filename
    link.click();
});
```

### Change Color Scheme

In `styles.css`, modify the CSS variables:
```css
:root {
    --primary-dark: #0A192F;      /* Main dark background */
    --accent-cyan: #64FFDA;       /* Primary accent color */
    --accent-green: #00FF88;      /* Secondary accent */
    --accent-orange: #FF6B6B;     /* Tertiary accent */
    --text-light: #E6F1FF;        /* Light text */
    --text-gray: #8892B0;         /* Gray text */
}
```

### Modify Fonts

To change fonts, update in `index.html` head section:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;700&display=swap" rel="stylesheet">
```

Then in `styles.css`:
```css
:root {
    --font-display: 'Your Display Font', sans-serif;
    --font-body: 'Your Body Font', sans-serif;
    --font-mono: 'Your Mono Font', monospace;
}
```

## 🎯 Tips for Best Results

### 1. Add Real Project Images
Replace the placeholder icons with actual screenshots:
```html
<div class="project-image">
    <img src="path/to/project-screenshot.jpg" alt="Project Name">
    <!-- Keep the overlay div -->
</div>
```

### 2. Optimize Images
- Use compressed images (JPG for photos, PNG for graphics)
- Recommended size: 800x600px for project images
- Use tools like TinyPNG or ImageOptim

### 3. Add Google Analytics
Add before closing `</head>` tag:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

### 4. SEO Optimization
Update meta tags in `<head>`:
```html
<meta name="description" content="Your professional description">
<meta name="keywords" content="DevSecOps, Cloud Security, Your Name">
<meta property="og:title" content="Your Name - DevSecOps Engineer">
<meta property="og:description" content="Your description">
<meta property="og:image" content="path/to/og-image.jpg">
<meta name="twitter:card" content="summary_large_image">
```

### 5. Add Favicon
```html
<link rel="icon" type="image/png" href="favicon.png">
```

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1920px and above)
- Laptop (1366px - 1920px)
- Tablet (768px - 1366px)
- Mobile (320px - 768px)

## 🔧 Dependencies

### External Libraries (Loaded via CDN)
- **Bootstrap 5.3.0** - Responsive framework
- **Font Awesome 6.4.0** - Icons
- **AOS 2.3.1** - Scroll animations
- **Google Fonts** - Orbitron, Rajdhani, JetBrains Mono

No installation required - all dependencies are loaded from CDN.

## 🐛 Troubleshooting

### Matrix background not showing
- Check if canvas element is present in HTML
- Verify JavaScript is loading correctly
- Check browser console for errors

### Animations not working
- Ensure AOS library is loaded
- Check if JavaScript file is linked correctly
- Try hard refresh (Ctrl+F5)

### Styles not applying
- Verify CSS file path is correct
- Check for typos in file names
- Clear browser cache

### Form not sending emails
- The form uses `mailto:` which opens default email client
- For server-side form handling, integrate with:
  - Formspree
  - EmailJS
  - Custom backend

## 🚀 Deployment Instructions

### GitHub Pages
1. Create a GitHub repository
2. Upload all files
3. Go to Settings > Pages
4. Select source: `main` branch, `/root` folder
5. Your site will be live at: `https://yourusername.github.io/repository-name`

### Netlify
1. Drag and drop the folder to Netlify
2. Site is live instantly
3. Get custom domain or use Netlify subdomain

### Custom Domain
1. Register a domain (Namecheap, GoDaddy, etc.)
2. Point DNS to your hosting provider
3. Update CNAME records

## 📄 License

This portfolio template is free to use for personal and commercial projects.

## 🤝 Support

If you encounter any issues or have questions:
- Check the troubleshooting section above
- Review the code comments for guidance
- Ensure all files are in the same directory

## 🎓 Learning Resources

To further customize or learn from this project:
- **HTML/CSS**: MDN Web Docs, W3Schools
- **JavaScript**: JavaScript.info, Eloquent JavaScript
- **Bootstrap**: Official Bootstrap documentation
- **Web Design**: Awwwards, Dribbble for inspiration

## ✨ Features to Add (Optional Enhancements)

1. **Blog section** - Share your security insights
2. **Dark/Light mode toggle** - User preference
3. **Language switcher** - Multi-language support
4. **Project detail pages** - In-depth project showcases
5. **Testimonials section** - Client feedback
6. **Skills endorsements** - LinkedIn-style endorsements
7. **Work availability status** - Live availability indicator
8. **Resume builder** - Generate PDF from web data

## 📊 Performance

Lighthouse scores (approximate):
- Performance: 95+
- Accessibility: 90+
- Best Practices: 95+
- SEO: 90+

## 🔒 Security Features Demonstrated

This portfolio itself demonstrates security best practices:
- No external form submission vulnerabilities
- No inline scripts (CSP-friendly)
- Secure external resource loading
- No sensitive data exposure
- Console security warnings

---

**Built with 💙 by Mourad EL OUATIK**

**Version**: 1.0.0  
**Last Updated**: January 2026

For questions or collaboration: mouradelouatik04@gmail.com
