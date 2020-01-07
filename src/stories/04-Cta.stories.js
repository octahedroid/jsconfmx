import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from "theme-ui";
const theme = require("../../theme.js");

import Cta from 'gatsby-theme-octahedroid/src/components/cta';

storiesOf('Call to Action', module)
  .addDecorator(getStory => <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>)
  .add('default', () => <Cta text="Call to action" link="/" type="primary">Hello Button</Cta>)
  .add('dark text', () => <Cta text="Call to action" link="/" type="lightShade" darkText />)


