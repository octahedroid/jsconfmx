import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from "theme-ui";
const theme = require("../../theme.js");
import { Coding, CodeThinking, FeaturesOverview } from 'gatsby-theme-octahedroid/src/components/undraw';

import CardGroup from 'gatsby-theme-octahedroid/src/components/card-group';

storiesOf('Card group', module)
  .addDecorator(getStory => <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>)
  .add('default', () => 
  <CardGroup
        title="Card group 3 columns"
        columns={3}
        items={[
          {
            intro: 'Something awesome',
            image: <Coding className="w-full h-64 md:h-80 lg:h-56" />,
            title: 'Let\'s code something now',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
            link: '/',
            ctaText: 'Hire us now!',
            ctaButton: true
          },
          {
            image: <CodeThinking className="w-full h-64 md:h-80 lg:h-56" />,
            title: 'We are hiring',
            text: 'Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
            link: '/',
            ctaText: 'Contact us',
          },
          {
            intro: 'Awesome features',
            image: <FeaturesOverview className="w-full h-64 md:h-80 lg:h-56" />,
            title: 'How is the process',
            text: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
            link: '/',
            ctaText: 'Watch now',
          },
        ]}
      />)


