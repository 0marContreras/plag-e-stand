/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'imagesvc.meredithcorp.io', 'encrypted-tbn0.gstatic.com', 'i.imgur.com'],
    
},

i18n: {
  // These are all the locales you want to support in
  // your application
  locales: ['en', 'fr', 'es'],
  // This is the default locale you want to be used when visiting
  // a non-locale prefixed path e.g. `/hello`
  defaultLocale: 'en',

}

}

module.exports = nextConfig
