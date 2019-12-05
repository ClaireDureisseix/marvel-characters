import React, { Component } from 'react';
import Character from './Character';

import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css";


const publicKey = `194e82fa7752a06e318949ee25879c5d`;
const hash = '52e8b131792ad4542ccc9adab79033f9';
const url = `http://gateway.marvel.com/v1/public/characters`; // putting it all together
const KEY = `&ts=1&apikey=${publicKey}&hash=${hash}`;

class CharacterList extends Component {
  state = {
    characters: [],
    message: '',
    currentPage: 1,
    totalPages: 0
  };

  componentDidMount() {
    this.fetchCharacter(1);
  }

  changeCurrentPage = numPage => {
    this.setState({ currentPage: numPage });
    this.fetchCharacter(this.state.currentPage)
  };

  fetchCharacter = async pageNb => {
    const api_call = await fetch(`${url}?offset=${pageNb}${KEY}`);
    const data = await api_call.json();
    this.setState({ characters: data.data.results, totalPages: data.data.total });
  };

  render() {
    const { characters, currentPage, totalPages } = this.state;
    return (
    <>
      <div className="characters--wrapper">
        {characters.map(
          character =>
            !character.thumbnail.path.includes('not_available') &&
            <Character character={character} key={character.id} />
        )}
      </div>

      <div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          changeCurrentPage={this.changeCurrentPage}
          theme="bottom-border"
        />
        {/* <h2>current Page:{this.state.currentPage}</h2> */}
      </div>
          
    </>
    );
  }
}

export default CharacterList;
