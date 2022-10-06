import React, { useState } from 'react';
import axios from 'axios';
import config from '../../config/config.jsx';
import { Box, Button, Heading, Input, Text } from '@chakra-ui/react';

// import './SummonerDataByName.scss';

const API_KEY = config.RIOT_TOKEN;
const DDRAGON_VERSION = config.DDRAGON_VERSION;
const NA1_PLATFORM_ROUTING_URL = config.NA1_PLATFORM_URL;
const NA1_REGIONAL_ROUTING_URL = config.NA1_REGIONAL_URL;
const DDRAGON_PROFILE_ICONS = config.DDRAGON_PROFILE_ICONS;

const SummonerDataByName = () => {
  const [searchInput, setSearchInput] = useState('');
  const [summonerData, setSummonerData] = useState({});

  const searchSummonerByName = event => {
    // Set up API call
    const ApiSummonerByNameCallString = `${NA1_PLATFORM_ROUTING_URL}/lol/summoner/v4/summoners/by-name/${searchInput}+?api_key=${API_KEY}`;

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
                src={`http://ddragon.leagueoflegends.com/cdn/${DDRAGON_VERSION}/img/profileicon/${summonerData.profileIconId}.png`}
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
