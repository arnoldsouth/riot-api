import React, { useState } from 'react';
import axios from 'axios';

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
    <div>
      <h2>Match Data by Match ID</h2>
      <input type="text" onChange={e => setSearchText(e.target.value)} />
      <button onClick={getPlayerGames}>Get previous 5 matches</button>

      {gameList.length !== 0 ? (
        <>
          {gameList.map((gameData, index) => (
            <>
              <h1>Game {index + 1}</h1>
              <div>
                {gameData.info.participants.map((data, participantIndex) => (
                  <p>
                    Summoner {participantIndex + 1}: {data.summonerName}, KDA:
                    {data.kills}/{data.deaths}/{data.assists}
                  </p>
                ))}
              </div>
            </>
          ))}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MatchDataByMatchId;
