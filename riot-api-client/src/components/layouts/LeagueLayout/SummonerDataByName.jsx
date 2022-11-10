import React, { useState } from 'react';
import axios from 'axios';
import config from '../../../config.jsx';
import { Box, Button, Heading, Input, Text } from '@chakra-ui/react';

const developmentApiKey = config.RIOT_TOKEN;
const ddragonUrl = config.DDRAGON_URL;
const ddragonVersion = config.DDRAGON_VERSION;
const platformRoutingUrlNA1 = config.PLATFORM_URL_NA1;
const regionalRoutingUrlNA1 = config.REGIONAL_URL_NA1;

const SummonerDataByName = () => {
  const [searchInput, setSearchInput] = useState('');
  const [summonerData, setSummonerData] = useState({});

  const searchSummonerByName = event => {
    // Set up API call
    const ApiSummonerByNameCallString = `${platformRoutingUrlNA1}/lol/summoner/v4/summoners/by-name/${searchInput}+?api_key=${developmentApiKey}`;

    axios
      .get(ApiSummonerByNameCallString)
      .then(response => {
        // console.log(response.data);
        setSummonerData(response.data);
      })
      .catch(err => err);
  };

  // `summonerData` is now an object that we can use moving forward
  console.log(summonerData);

  return (
    <>
      <Box ml={6} mr={6}>
        <Box>
          <Heading fontSize={'3xl'}>Summoner Data by Name</Heading>

          <Input
            boxSize={'auto'}
            type="text"
            onChange={e => setSearchInput(e.target.value)}
          />

          <br />

          <Button onClick={e => searchSummonerByName(e)}>Search</Button>
        </Box>

        <br />

        <Box display={'flex'} justifyContent={'flex-start'}>
          {JSON.stringify(summonerData) !== '{}' ? (
            <div>
              {/* <p>accountId: {summonerData.accountId}</p> */}
              {/* <p>id: {summonerData.id}</p> */}
              <img
                width="100"
                height="100"
                src={`${ddragonUrl}/cdn/${ddragonVersion}/img/profileicon/${summonerData.profileIconId}.png`}
                alt="profileIconId"
              />
              <Heading fontSize={'lg'}>{summonerData.name}</Heading>
              {/* <p>profileIconId: {summonerData.profileIconId}</p> */}
              {/* <p>puuid: {summonerData.puuid}</p> */}
              <Text fontSize={'sm'}>Level: {summonerData.summonerLevel}</Text>
            </div>
          ) : (
            <>{/* <span>Enter Summoner Name</span> */}</>
          )}
        </Box>
      </Box>
    </>
  );
};

export default SummonerDataByName;
