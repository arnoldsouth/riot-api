import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import Header from './components/sections/Header/Header.jsx';

import LeagueLayout from './components/layouts/LeagueLayout/LeagueLayout.jsx';

import customTheme from './styles/customTheme/customTheme.jsx';
import './App.css';

const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Header />
      <LeagueLayout />
    </ChakraProvider>
  );
};

export default App;
