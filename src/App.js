import "./App.css";
import React, {useState} from "react";
import Header from "./components/Header/Header.js";
import Menu from "./components/Menu/Menu.js";
import Games from "./components/Games/Games.js";
import Logo from "./components/Logo/Logo.js";
import SearchBar from "./components/UI/SearchBar/SearchBar";
import Game from "./components/Game/Game";
import axios from "axios";

const API_KEY = "RGAPI-89c8fd7d-c149-4569-9ffc-e26c44c4dfca";

const App = () => {

  // state:
  const [value, setValue] = useState('');
  const [puuid, setPuuid] = useState('');

  const [err, setErr] = useState('');

  const summonerInformation = {
    name: value,
  }

  const handleInputChange = (e) => setValue(e.target.value);
  const handleSummonerData = e => {
    e.preventDefault();

    const API_SUMMONER = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${value}?api_key=${API_KEY}`;

    // fetch(API_SUMMONER)
    //   .then(response => {
    //   if (response.ok) {
    //     return response
    //   }
    //   throw Error('Error with request!')
    // })
    //   .then(response => response.json())
    //   .then(response => console.log(response))
    //   .catch(err => {
    //     setErr(true);
    // })

  axios.get(API_SUMMONER)
    .then(response => {
      console.log(response)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="App">
      <Logo />
      <Header>
        <SearchBar value={value}
                   change={handleInputChange}
                   submit={handleSummonerData}
        />
      </Header>

      <Menu />
      <Games summonerName={summonerInformation}>
        <Game change={handleSummonerData}/>
      </Games>
    </div>
  );
}

export default App;
