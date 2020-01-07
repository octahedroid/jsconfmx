import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from "theme-ui";
const theme = require("../../theme.js");

import HeroCta from 'gatsby-theme-octahedroid/src/components/hero-cta';

storiesOf('Hero with call to action', module)
  .addDecorator(getStory => <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>)
  .add('default', () => 
  <HeroCta 
    intro="Open-Source project"
    title="GatsbyJS Tailwind Starter with Theme-UI"
    text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
    link="http://google.com"
    ctaText="Click now!"
    imageName="hero.png"
  />)


