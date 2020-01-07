import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from "theme-ui";
const theme = require("../../theme.js");

import Disqus from 'gatsby-theme-octahedroid/src/components/disqus';

storiesOf('Comments by disqus', module)
  .addDecorator(getStory => <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>)
  .add('default', () => 
  <Disqus
    url="http://octahedroid.com"
    identifier="octahedroid"
    title="Comments"
  />)


