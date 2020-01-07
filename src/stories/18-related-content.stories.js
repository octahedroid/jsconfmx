import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from "theme-ui";
const theme = require("../../theme.js");

import RelatedContent from 'gatsby-theme-octahedroid/src/components/related-content';

storiesOf('Related content for posts', module)
  .addDecorator(getStory => <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>)
  .add('default', () => 
  <RelatedContent
    posts={[
      {
        title:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
        excerpt:
          "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
        image: "hero.png",
        link: "/"
      },
      {
        title:
          "Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus",
        excerpt:
          "Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.",
        image: "hero.png",
        link: "/"
      },
      {
        title:
          "Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus",
        excerpt:
          "Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.",
        image: "hero.png",
        link: "/"
      }
    ]}
  />)


