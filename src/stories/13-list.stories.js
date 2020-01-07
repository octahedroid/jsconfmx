import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from "theme-ui";
const theme = require("../../theme.js");

import { FaCss3, FaDrupal, FaDev, FaFortAwesomeAlt, FaGithub, FaEvernote } from "react-icons/fa";
import List from 'gatsby-theme-octahedroid/src/components/list';
const item = {
  icon: <FaCss3 />,
  text: 'Item one'
};

storiesOf('List of items with icons', module)
  .addDecorator(getStory => <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>)
  .add('default', () => 
  <List
    title="List of Items 3 columns"
    columns={3}
    items={[
      {
        icon: <FaCss3 />,
        text: 'Item one'
      },
      {
        icon: <FaDrupal />,
        text: 'Item dos',
        link: '/'
      },
      {
        icon: <FaGithub />,
        text: 'Item 3'
      },
      {
        icon: <FaFortAwesomeAlt />,
        text: 'Item cuatro'
      },
      {
        icon: <FaDrupal />,
        text: 'Item mas largo pero no importa'
      },
      {
        icon: <FaEvernote />,
        text: 'Lista de cosas importantes'
      },
      {
        icon: <FaDev />,
        text: 'Mas informacion relevante'
      },
      {
        icon: <FaCss3 />,
        text: 'Drupal se puede'
      },
      {
        icon: <FaDev />,
        text: 'Que mas quiere'
      },
    ]}
  />)


