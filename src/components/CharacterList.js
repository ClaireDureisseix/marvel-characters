import React, { Component } from 'react';
import Character from './Character';

const publicKey = `194e82fa7752a06e318949ee25879c5d`;
const hash = '52e8b131792ad4542ccc9adab79033f9';
const url = `http://gateway.marvel.com/v1/public/characters`; // putting it all together
const KEY = `&ts=1&apikey=${publicKey}&hash=${hash}`;

class CharacterList extends Component {
  state = {
    characters: [],
    message: ''
  };

  componentDidMount() {
    this.fetchCharacter(1);
  }

  fetchCharacter = async pageNb => {
    const api_call = await fetch(`${url}?offset=${pageNb}${KEY}`);
    const data = await api_call.json();
    this.setState({ characters: data.data.results });
    console.log(this.state.characters);
  };

  render() {
    const { characters } = this.state;
    return (
      <div className="characters--wrapper">
        {characters.map(character =>
          <Character character={character} key={character.id} />
        )}
      </div>
    );
  }
}

export default CharacterList;
