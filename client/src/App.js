import React from 'react';

import {
  ChakraProvider,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';

import customTheme from './styles/customTheme/customTheme.jsx';
import './App.css';
import SummonerDataByName from './components/SummonerDataByName/SummonerDataByName.jsx';
import MatchDataByMatchId from './components/MatchDataByMatchId/MatchDataByMatchId.jsx';

import Header from './components/sections/Header/Header.jsx';

const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Header />
      <SummonerDataByName />
      <MatchDataByMatchId />
    </ChakraProvider>
  );
};

export default App;
