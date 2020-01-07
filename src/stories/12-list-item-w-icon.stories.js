import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from "theme-ui";
const theme = require("../../theme.js");

import { FaCss3 } from "react-icons/fa";
import ListItemWIcon from 'gatsby-theme-octahedroid/src/components/list-item-w-icon';
const item = {
  icon: <FaCss3 />,
  text: 'Item one'
};

storiesOf('List item with icon', module)
  .addDecorator(getStory => <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>)
  .add('default', () => 
  <ListItemWIcon icon={item.icon} link={item.link} text={item.text} className={`w-full md:w-1/2 lg:w-1/3`} />)


