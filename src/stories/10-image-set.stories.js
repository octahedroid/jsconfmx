import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from "theme-ui";
const theme = require("../../theme.js");

import ImageSet from 'gatsby-theme-octahedroid/src/components/image-set';
const set = {
  title: "Set one of icons",
  images: [
    {
      src: "hero.png",
      link: '/'
    },
    {
      src: "hero.png",
      link: '/'
    },
    {
      src: "hero.png",
    },
    {
      src: "hero.png",
      link: 'http://google.com'
    },
  ]
};

storiesOf('Image set with title', module)
  .addDecorator(getStory => <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>)
  .add('default', () => 
  <ImageSet title={set.title} images={set.images} />)


