import React, { useState } from 'react';
import axios from 'axios';
import Config from '../../helpers/Config/Config.jsx';

// import './SummonerDataByName.scss';

const API_KEY = Config.RIOT_TOKEN;
const DDRAGON_VERSION = Config.DDRAGON_VERSION;
const NA1_PLATFORM_ROUTING_URL = Config.NA1_PLATFORM_URL;
const NA1_REGIONAL_ROUTING_URL = Config.NA1_REGIONAL_URL;
const DDRAGON_PROFILE_ICONS = Config.DDRAGON_PROFILE_ICONS;

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
    <div>
      <div>
        <h5>Summoner Data by Name</h5>
        <input type="text" onChange={e => setSearchInput(e.target.value)} />
        <button onClick={e => searchSummonerByName(e)}>Search</button>
      </div>

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
          <p>{summonerData.name}</p>
          {/* <p>profileIconId: {summonerData.profileIconId}</p> */}
          {/* <p>puuid: {summonerData.puuid}</p> */}
          <p>Level: {summonerData.summonerLevel}</p>
        </div>
      ) : (
        <>{/* <span>Enter Summoner Name</span> */}</>
      )}
    </div>
  );
};

export default SummonerDataByName;
