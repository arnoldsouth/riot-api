const express = require("express");
const cors = require("cors");
const axios = require("axios");

require("dotenv").config();

const app = express();

app.use(cors());

const API_KEY = process.env.RIOT_TOKEN;
const PORT = process.env.PORT;

const getPlayerPuuid = (playerName) => {
    return axios
        .get(
            "https://na1.api.riotgames.com" +
                "/lol/summoner/v4/summoners/by-name/" +
                playerName +
                "?api_key=" +
                API_KEY
        )
        .then((response) => {
            console.log(response.data);
            return response.data.puuid;
        })
        .catch((err) => err);
};

app.get("/past5Games", async (req, res) => {
    // We pass in the parameter req.query.username here which is from our frontend at function getPlayerGames for the get request params
    const playerName = req.query.username;

    // Puuid
    // Promise needs to get fulfilled so we can use the puuid going forward
    const puuid = await getPlayerPuuid(playerName);

    // API call to retrieve Match by Puuid
    const API_CALL =
        "https://americas.api.riotgames.com" +
        "/lol/match/v5/matches/by-puuid/" +
        puuid +
        "/ids" +
        "?api_key=" +
        API_KEY;

    // Get request for API_CALL: this will give us a list of game IDs
    const gameIds = await axios
        .get(API_CALL)
        .then((response) => response.data)
        .catch((err) => err);

    // A list of game ID strings (20 games)
    console.log(gameIds);

    // Loop through the game IDs; for each loop, get the information based off game ID (the API CALL)
    // Can use API caching if we have a lot of API calls
    // Declare match data as a new array
    const matchDataArray = [];
    // Each time this loop runs, there's an API call which is taxing
    for (let i = 0; i < gameIds.length - 10; i++) {
        // We declare a match id for whichever ones are given to us
        const matchId = gameIds[i];
        const matchData = await axios
            .get(
                "https://americas.api.riotgames.com" +
                    "/lol/match/v5/matches/" +
                    matchId +
                    "?api_key=" +
                    API_KEY
            )
            .then((response) => response.data)
            .catch((err) => err);
        // matchData is equal to response.data with this syntax

        matchDataArray.push(matchData);
    }

    // Save information above after the loop and into an array; then give array as JSON response to the user
    // [Game1Object, Game2Object, ...]
    // res.json is the json representation of matchDataArray; this is what gets sent to our frontend as long as there's no issues
    res.json(matchDataArray);
});

app.listen(PORT || 4000, function () {
    console.log(`Server is running on PORT ${PORT}`);
});
