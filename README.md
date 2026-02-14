# 💕 Valentine's Day Website

A beautiful, animated Valentine's Day website built with React, Framer Motion, and modern web technologies. Perfect for expressing your love and gratitude with style!

## ✨ Features

- **Stunning Animations**: Powered by Framer Motion for smooth, professional animations
- **Floating Hearts**: Animated hearts that float across the screen
- **Gradient Background**: Dynamic, shifting gradient background
- **Photo Gallery**: Interactive gallery with click-to-enlarge functionality
- **Gratitude Cards**: Beautiful cards with hover effects
- **Custom Cursor**: Elegant cursor follower effect
- **Fully Responsive**: Looks great on all devices
- **Easy Customization**: All content controlled through a single config file

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd valentine-react
```

2. Install dependencies (if not already installed):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🎨 Customization Guide

### Quick Customization

All website content is controlled through the `src/config.js` file. Simply edit this file to personalize your website!

#### Step 1: Edit the Main Title and Subtitle

```javascript
export const siteConfig = {
  title: "Happy Valentine's Day",  // Change this to your title
  subtitle: "With All My Heart",   // Change this to your subtitle
  // ...
}
```

#### Step 2: Customize Your Messages

```javascript
messages: [
  {
    id: 1,
    text: "Your first heartfelt message here..."
  },
  {
    id: 2,
    text: "Your second message here..."
  }
]
```

#### Step 3: Update Gratitude Items

```javascript
gratitudeItems: [
  {
    id: 1,
    icon: "🌟",                    // Change the emoji
    title: "Your Kindness",        // Change the title
    description: "Your description" // Change the description
  },
  // Add more items as needed
]
```

#### Step 4: Add Your Photos

Replace the placeholder URLs with your own image URLs:

```javascript
photos: [
  {
    id: 1,
    url: "path/to/your/image.jpg",  // Your image URL
    caption: "Your caption"          // Your caption
  },
  // Add more photos (recommended: 3-6 photos)
]
```

**Image Tips:**
- Use high-quality images (recommended: 800x800px or larger)
- You can use:
  - Local images: Place in `public/` folder and reference as `/image.jpg`
  - Online images: Use direct URLs from services like Imgur, Cloudinary, etc.
  - Unsplash: Use Unsplash URLs for placeholder images

#### Step 5: Change the Quote

```javascript
quote: {
  text: "Your favorite quote here...",
  author: "Author Name"
}
```

#### Step 6: Update the Signature

```javascript
signature: "Your signature message 💕"
```

### Advanced Customization

#### Changing Colors

Edit the color scheme in `src/config.js`:

```javascript
colors: {
  primary: "#ff6b9d",    // Main pink color
  secondary: "#764ba2",  // Purple color
  accent: "#fda085",     // Accent color
  text: "#ffffff"        // Text color
}
```

Then apply these colors in your CSS files as needed.

#### Modifying Animations

Animations are controlled using Framer Motion. To modify animations, edit the component files in `src/components/`:

- `Hero.jsx` - Title and subtitle animations
- `FloatingHearts.jsx` - Floating heart animations
- `GratitudeGrid.jsx` - Gratitude card animations
- `PhotoGallery.jsx` - Photo gallery animations
- `Quote.jsx` - Quote section animations

#### Adjusting Styles

Main styles are in `src/App.css`. You can modify:
- Font sizes and families
- Spacing and padding
- Border radius values
- Background effects
- Responsive breakpoints

## 📁 Project Structure

```
valentine-react/
├── src/
│   ├── components/
│   │   ├── Hero.jsx           # Hero section with title
│   │   ├── MessageCard.jsx    # Message display component
│   │   ├── GratitudeGrid.jsx  # Gratitude items grid
│   │   ├── PhotoGallery.jsx   # Photo gallery with modal
│   │   ├── Quote.jsx          # Quote section
│   │   ├── FloatingHearts.jsx # Animated floating hearts
│   │   └── Signature.jsx      # Signature message
│   ├── config.js              # 🎯 MAIN CONFIGURATION FILE
│   ├── App.jsx                # Main app component
│   ├── App.css                # Main styles
│   ├── index.css              # Global styles
│   └── main.jsx               # Entry point
├── public/                    # Static assets (place images here)
├── package.json               # Dependencies
└── README.md                  # This file
```

## 🎭 Component Overview

### Hero
- Animated title with bouncing letters
- Pulsing heart icon
- Fade-in subtitle

### MessageCard
- Glass-morphism design
- Slide-in animations
- Hover lift effect

### GratitudeGrid
- 4-column responsive grid
- Hover animations (rotate & scale)
- Animated icons

### PhotoGallery
- Click-to-enlarge functionality
- Hover overlay effects
- Modal view with backdrop

### Quote
- Animated quote icon
- Glass-morphism background
- Elegant typography

### FloatingHearts
- Continuous heart animations
- Random positioning
- Fade in/out effects

## 🛠️ Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **React Icons** - Icon components
- **CSS3** - Styling with modern features

## 📦 Build for Production

To build the website for production:

```bash
npm run build
```

The built files will be in the `dist/` folder. You can deploy this folder to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 🚀 Deployment Options

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist/` folder to [Netlify Drop](https://app.netlify.com/drop)

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## 💡 Tips & Tricks

1. **Performance**: Optimize images before uploading (use tools like TinyPNG)
2. **Mobile Testing**: Always test on mobile devices
3. **Personal Touch**: Add your own photos for the best impact
4. **Font Choices**: Change fonts in `App.css` for different vibes
5. **Emojis**: Use emojis liberally for extra charm! ✨💖🌹

## 🐛 Troubleshooting

### Images Not Loading?
- Make sure image URLs are correct
- For local images, place them in the `public/` folder
- Check browser console for errors

### Animations Not Smooth?
- Ensure you're using a modern browser
- Check if hardware acceleration is enabled
- Reduce the number of floating hearts if needed

### Build Errors?
- Run `npm install` to ensure all dependencies are installed
- Clear cache: `rm -rf node_modules && npm install`
- Check for any syntax errors in config.js

## 📝 License

This project is free to use for personal purposes. Share the love! 💕

## 🙏 Credits

Built with ❤️ using React and Framer Motion

---

**Made with love for Valentine's Day! 💕**

Happy customizing! If you need help, remember: the most important thing is the message from your heart. ✨
