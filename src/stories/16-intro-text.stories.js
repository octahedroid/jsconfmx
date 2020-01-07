import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from "theme-ui";
const theme = require("../../theme.js");

import Intro from 'gatsby-theme-octahedroid/src/components/intro-text';

storiesOf('Intro title for components', module)
  .addDecorator(getStory => <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>)
  .add('default', () => 
  <Intro>
    Intro text for other components
  </Intro>)


