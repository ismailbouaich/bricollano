// i18n configuration for future localization
// Currently supporting Italian (it) as default
// Ready for expansion to other languages

export const i18n = {
  defaultLocale: 'it',
  locales: ['it'], // Add 'en', 'fr', 'es' etc. when needed
  localDetection: true,
  domains: [
    {
      domain: 'bricollano.it',
      defaultLocale: 'it',
    },
    // Add other domains for different locales if needed
    // {
    //   domain: 'bricollano.com',
    //   defaultLocale: 'en',    
    // },
  ],
}

// Translation keys structure (for future implementation)
export const translations = {
  it: {
    site: {
      title: 'Bricollano Milano | Riparazioni e Manutenzione Casa Milano',
      description: 'Servizi professionali di riparazioni e manutenzione casa a Milano. Elettricista, idraulico, muratore qualificati.',
    },
    nav: {
      services: 'Servizi',
      features: 'Caratteristiche',
      about: 'Chi Siamo',
      contact: 'Contatti',
    },
    hero: {
      title: 'Riparazioni e Manutenzione Casa a Milano',
      subtitle: 'Bricollano è la piattaforma leader per servizi di riparazione e manutenzione casa a Milano.',
    },
    // Add more translation keys as needed
  },
  // Add other languages here when needed
  // en: {
  //   site: {
  //     title: 'Bricollano Milan | Home Repairs and Maintenance Milan',
  //     description: 'Professional home repair and maintenance services in Milan. Qualified electricians, plumbers, and masons.',
  //   },
  //   // ... other translations
  // },
}

export default i18n
