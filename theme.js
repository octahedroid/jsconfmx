

const baseTheme = require('gatsby-theme-jsconfmx/theme');

const myTheme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    primary: '#5f2265',
    secondary: '#ce2281',
    accent: '#ed335b',
    success: '#0da695',
    darkShade: '#f16935',
    lightShade: '#f0c328',
    lightPrimary: 'rgba(95,34,101, .06)',
    darkPrimary: 'rgba(95,34,101, .3)'
  },
  height:{
    ...baseTheme.height,
    navbar: '50px',
    hero: '700px',
    speaker: '500px'
  },
  styles: { 
    ...baseTheme.styles,
    h1: {
      ...baseTheme.heading,
      fontSize: "4rem",
    },
    h2: {
      ...baseTheme.heading,
      fontSize: "2.5rem",
    },
    h3: {
      ...baseTheme.heading,
      fontSize: "2rem",
    },
    h4: {
      ...baseTheme.heading,
      fontSize: "1.5rem",
    },
    h5: {
      ...baseTheme.heading,
      fontSize: "1.25rem",
      fontWeight: 'body',
    },
    h6: {
      ...baseTheme.heading,
      fontSize: "1rem",
    },
  }
}
// console.log(myTheme);
module.exports = myTheme;