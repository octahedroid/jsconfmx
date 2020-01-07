import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from "theme-ui";
const theme = require("../../theme.js");

import Tags from 'gatsby-theme-octahedroid/src/components/tags';

storiesOf('Tags for posts', module)
  .addDecorator(getStory => <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>)
  .add('default', () => 
  <Tags
    tags={[
      'Gatsby', 'React', 'Octahedroid'
    ]}
  />)


