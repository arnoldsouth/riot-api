import React, { useState } from 'react';

import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';

// import { Logo } from './Logo';
import SummonerDataByName from './components/SummonerDataByName/SummonerDataByName.jsx';
import Navbar from './layouts/Navbar/Navbar.jsx';
import MatchDataByMatchId from './components/MatchDataByMatchId/MatchDataByMatchId.jsx';

const App = () => {
  return (
    <ChakraProvider>
      <Navbar />
      <SummonerDataByName />
      <MatchDataByMatchId />
    </ChakraProvider>
  );
};

export default App;
