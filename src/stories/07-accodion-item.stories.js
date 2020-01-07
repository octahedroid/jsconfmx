import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from "theme-ui";
const theme = require("../../theme.js");

import AccordionItem from 'gatsby-theme-octahedroid/src/components/accordion-item';
const item = {
  heading: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit?',
  text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'
};
storiesOf('Accordion item', module)
  .addDecorator(getStory => <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>)
  .add('default', () => 
  <AccordionItem heading={ item.heading }>
    { item.text }
  </AccordionItem>)


