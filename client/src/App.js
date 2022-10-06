import React from 'react';

import {
  ChakraProvider,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import Navbar from './layouts/Navbar/Navbar.jsx';
import customTheme from './styles/customTheme/customTheme.jsx';
import './App.css';
import SummonerDataByName from './components/SummonerDataByName/SummonerDataByName.jsx';
import MatchDataByMatchId from './components/MatchDataByMatchId/MatchDataByMatchId.jsx';

const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Navbar />
      <SummonerDataByName />
      <MatchDataByMatchId />
    </ChakraProvider>
  );
};

export default App;
