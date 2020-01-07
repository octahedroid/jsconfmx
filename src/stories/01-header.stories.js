import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from "theme-ui";
const theme = require("../../theme.js");

import Header from 'gatsby-theme-octahedroid/src/components/header';

storiesOf('Page header', module)
  .addDecorator(getStory => <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>)
  .add('default', () => <Header />)
  .add('scrolled', () => <Header scrolled />)


