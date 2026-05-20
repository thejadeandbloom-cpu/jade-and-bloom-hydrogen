// hydrogen.config.js
// Jade and Bloom Hydrogen Store Configuration

export default {
  shopify: {
    storeDomain: 'thejadeandbloom.com',
    storefrontAccessToken: process.env.VITE_STOREFRONT_API_TOKEN,
    apiVersion: '2024-01',
  },
  
  session: {
    secret: process.env.SESSION_SECRET || 'your-session-secret-key',
  },

  // Terracotta Luxe Brand Palette
  brand: {
    name: 'Jade and Bloom',
    tagline: 'Beauty, Bold and Beyond',
    colors: {
      primary: '#C65D3B',      // Terracotta
      primaryLight: '#D4915A', // Light Terracotta
      dark: '#3E2723',         // Dark Brown
      darkLight: '#2C1508',    // Dark Brown Light
      beige: '#f5ebe0',        // Warm Beige/Cream
      text: '#1a1a1a',
      border: '#e0d4c7',
    },
    fonts: {
      display: 'Cinzel Decorative, serif',
      body: 'Lora, serif',
    },
  },

  // Site Navigation Structure
  navigation: [
    { name: 'Shop', href: '/shop' },
    { name: 'Our Story', href: '/story' },
    { name: 'Ingredients', href: '/ingredients' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Quiz', href: 'https://jovial-crostata-9caec5.netlify.app/' },
    { name: 'Contact', href: '/contact' },
  ],

  // Social Links
  social: {
    instagram: 'https://www.instagram.com/the.jadeandbloom/',
    youtube: 'https://www.youtube.com/@jadeandbloom',
    amazon: 'https://www.amazon.in/s?k=jade+and+bloom',
  },

  // Discount Codes
  discountCode: 'JBGRAM30',
  discountPercentage: 30,

  // Email Marketing
  newsletter: {
    provider: 'mailchimp',
    audienceId: 'your-audience-id',
  },

  // SEO
  seo: {
    title: 'Jade and Bloom - Premium Indian Skincare',
    description: 'Scientifically formulated skincare for Indian skin. Green Tea, Vitamin C, Kojic Acid & SPF 50 sunscreen.',
    keywords: ['skincare', 'India', 'vitamin C serum', 'sunscreen', 'face wash', 'moisturizer'],
  },

  // Analytics
  analytics: {
    googleAnalyticsId: 'G-YOUR-ID',
    facebookPixelId: 'YOUR-PIXEL-ID',
  },
};
