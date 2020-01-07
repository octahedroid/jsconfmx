import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from "theme-ui";
const theme = require("../../theme.js");
import { Coding } from 'gatsby-theme-octahedroid/src/components/undraw';

import Card from 'gatsby-theme-octahedroid/src/components/card';
const cardData = {
  intro: 'Something awesome',
  image: <Coding className="w-full h-64 md:h-80 lg:h-56" />,
  title: 'Let\'s code something now',
  text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
  link: '/',
  ctaText: 'Hire us now!',
  ctaButton: true
};

storiesOf('Card', module)
  .addDecorator(getStory => <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>)
  .add('default', () => 
  <Card 
    intro={cardData.intro} 
    title={cardData.title} 
    image={cardData.image} 
    text={cardData.text} 
    link={cardData.link} 
    ctaText={cardData.ctaText} 
    ctaButton={cardData.ctaButton} 
    />)


