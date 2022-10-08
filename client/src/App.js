import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import customTheme from './styles/customTheme/customTheme.jsx';
import './App.css';

import Header from './components/sections/Header/Header.jsx';
import LeagueLayout from './components/layouts/LeagueLayout/LeagueLayout';

const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Header />
      <LeagueLayout />
    </ChakraProvider>
  );
};

export default App;
