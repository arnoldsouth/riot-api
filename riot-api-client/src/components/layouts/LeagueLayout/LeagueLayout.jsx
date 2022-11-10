import React from 'react';
import { Box } from '@chakra-ui/react';

import SummonerDataByName from './SummonerDataByName.jsx';
import MatchDataByMatchId from './MatchDataByMatchId.jsx';

const LeagueLayout = () => {
  return (
    <Box>
      <SummonerDataByName />
      <MatchDataByMatchId />
    </Box>
  );
};

export default LeagueLayout;
