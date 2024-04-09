import React from 'react';
import './App.css';
import "./style.css"
import Players from './Players';
import Grid from './Grid';

import { useState } from 'react';

function App() {
const [players, setPlayers] = useState(
  () => {
    const localValue = localStorage.getItem("Players")
    if (localValue == null) return []

    return JSON.parse(localValue);
  }
)

function addPlayer(name: string) {
  setPlayers((currentPlayer: any) => {
    return [
      ...currentPlayer,
    ]
  })
}


  return (
    <>
    <Players onSubmit={addPlayer}></Players>
    <Grid></Grid>
    </>
  );
}

export default App;
