import React from 'react';

import CharacterList from './CharacterList';
import Title from './Title';

import '../App.css';

const Home = () => {
  return (
    <div className="App">
      <Title />
      <CharacterList />
    </div>
  );
};

export default Home;
