import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from "theme-ui";
const theme = require("../../theme.js");

import MobileMenu from 'gatsby-theme-octahedroid/src/components/mobile-menu';

storiesOf('Mobile menu', module)
  .addDecorator(getStory => <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>)
  .add('default', () => 
  <MobileMenu
    showSidebar
  />)


