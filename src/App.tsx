import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List';

export interface Istate {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[]
}

function App() {
  const [people, setPeople] = useState<Istate["people"]>([
    {
      name: "LeBron James",
      age: 36,
      url: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254',
      note: "mvp"
    }
  ])


  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
