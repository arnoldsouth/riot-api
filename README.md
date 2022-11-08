# RIOT-API Player Stat Tracking Web App

## Frontend Notes (client/)

## Backend Notes (server/)

#### Description: A simple player stat tracking web app using Riot Games' Official API endpoints

### Links

- [Riot Games Developers](https://developer.riotgames.com/): Homepage of the Riot Developer Portal
- [Riot Games APIs](https://developer.riotgames.com/apis): You must obtain your own Riot Games Development API Key
- [Data Dragon (ddragon) APIs](https://developer.riotgames.com/docs/lol#data-dragon): Set of static data files that provide images and other information on Riot Games' League of Legends title

### Packages & Dependencies

    "axios": "0.26.0",
    "cors": "2.8.5",
    "dotenv": "16.0.0",
    "express": "4.17.3",
    "redis": "4.0.4",
    "redis-commander": "0.7.2"
    "eslint-config-standard": "16.0.3",
    "eslint-plugin-import": "2.25.4",
    "eslint-plugin-node": "11.1.0",
    "eslint-plugin-promise": "5.2.0",
    "jest": "^27.5.1",
    "nodemon": "2.0.15",
    "response-time": "^2.3.2"

## League of Legends

#### Routes

### API Server Test Running

`/api`

### Summoner

#### Summoner Test Running

`/api/summoner`

#### Return data for a summoner

`/api/summoner/:region&:name`
`/api/summoner/puuid/:region&:name`

#### Return icon url for a summoner

`/api/summoner/icon/:id`

### Matches

#### Matches Test Running

`/api/matches`

#### Return recent matches for a summoner

`/api/matches/:region&:puuid&:count`

### Champions

#### Champions Test Running

`/api/champions`

#### Get all champions

`/api/champions/all`

#### Get all info for specific champion

`/api/champions/champ/:name`

#### Current Free Champion Rotation

`/api/champions/free/:region`
