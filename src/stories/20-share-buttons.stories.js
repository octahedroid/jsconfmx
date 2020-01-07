import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from "theme-ui";
const theme = require("../../theme.js");

import ShareButtons from 'gatsby-theme-octahedroid/src/components/share-buttons';

storiesOf('Share buttons for posts', module)
  .addDecorator(getStory => <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>)
  .add('default', () => 
  <ShareButtons
    url="/"
    title="Title por share"
    handler="@octahedroid"
    tags={['Gatsby']}
  />)


