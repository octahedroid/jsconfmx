import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from "theme-ui";
const theme = require("../../theme.js");

import Accordion from 'gatsby-theme-octahedroid/src/components/accordion';

storiesOf('Accordion', module)
  .addDecorator(getStory => <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>)
  .add('default', () => 
    <Accordion
    intro="Know more about us"
    title="Frequently Asked Questions"
    items={[
      {
        heading: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit?',
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'
      },
      {
        heading: 'Cum sociis natoque penatibus?',
        text: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.'
      },
    ]}
  />)


