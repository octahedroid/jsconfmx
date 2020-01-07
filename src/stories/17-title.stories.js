import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from "theme-ui";
const theme = require("../../theme.js");

import Title from 'gatsby-theme-octahedroid/src/components/title';

storiesOf('Titles', module)
  .addDecorator(getStory => <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>)
  .add('default', () => 
  <Title
  >Some medium title</Title>)
  .add('Big title', () => 
  <Title
    big
  >Some big title</Title>)
  .add('Centered title', () => 
  <Title
    centered
  >Some centered title</Title>)


