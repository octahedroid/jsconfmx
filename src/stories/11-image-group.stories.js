import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from "theme-ui";
const theme = require("../../theme.js");

import ImageGroup from 'gatsby-theme-octahedroid/src/components/image-group';
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

storiesOf('Group of image sets with title', module)
  .addDecorator(getStory => <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>)
  .add('default', () => 
  <ImageGroup 
        intro="Intro text here"
        title="People we work with i guess"
        imageSets={[
          {
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
          },
          {
            title: "Set two of icons",
            images: [
              {
                src: "hero.png",
              },
              {
                src: "hero.png",
              },
              {
                src: "hero.png",
                link: '/'
              },
              {
                src: "hero.png",
                link: 'http://google.com'
              },
            ]
          },
        ]}
      />)


