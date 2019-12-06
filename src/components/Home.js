import React from 'react';

import CharacterList from './CharacterList';
import Title from './Title';

import '../App.css';

// Stateless component home page
const Home = () => {
  return (
    <div className="App">
      <Title />
      <CharacterList />
    </div>
  );
};

export default Home;
