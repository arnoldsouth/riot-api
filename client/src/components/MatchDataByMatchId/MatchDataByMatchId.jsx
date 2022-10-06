import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, Heading, Input, Stack, Text } from '@chakra-ui/react';

const MatchDataByMatchId = () => {
  const [searchText, setSearchText] = useState('');
  const [gameList, setGameList] = useState([]);

  function getPlayerGames(event) {
    // Instead of making Get request to Riot API, we're making Get request to our proxyServer; from line 29 in proxyServer.js
    // When we make a Get request here on the client side, it'll hit the proxyServer code and perform the logic over there.
    // Add optional params here; aka username object here in frontend is the parameter for our express backend
    axios
      .get('http://localhost:4000/past5Games', {
        params: { username: searchText },
      })
      .then(function (response) {
        setGameList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    // response.data here is the array data that we return at the end
  }

  console.log(gameList);

  return (
    <>
      <Box ml={6} mr={6}>
        <Box>
          <Heading fontSize={'3xl'}>Match Data by Match ID</Heading>

          <Input
            boxSize={'auto'}
            type="text"
            onChange={e => setSearchText(e.target.value)}
          />

          <br />

          <Button onClick={getPlayerGames}>Get Matches</Button>
        </Box>

        <br />

        <Box
        // boxSize={120}
        // display={'flex'}
        // alignContent={'flex-start'}
        // justifyContent={'flex-start'}
        >
          {gameList.length !== 0 ? (
            <>
              {gameList.map((gameData, index) => (
                <>
                  <Heading fontSize={'lg'}>Game {index + 1}</Heading>

                  {gameData.info.participants.map((data, participantIndex) => (
                    <Box>
                      <Stack>
                        <Text
                          fontSize={'sm'}
                          // display={'flex'}
                          // justifyContent={'center'}
                        >
                          {/* Summoner {participantIndex + 1}:  */}
                          {data.summonerName} KDA: {data.kills} / {data.deaths}{' '}
                          / {data.assists}
                        </Text>
                      </Stack>
                    </Box>
                  ))}
                  <br />
                </>
              ))}
            </>
          ) : (
            <></>
          )}
        </Box>
      </Box>
    </>
  );
};

export default MatchDataByMatchId;
