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
    this.fetchCharacter(0);
  }

  componentDidUpdate() {
    
  }

  
  fetchCharacter = async pageNb => {
    const offset = pageNb * 20
    const api_call = await fetch(`${url}?offset=${offset}${KEY}`);
    const data = await api_call.json();
    const total = data.data.total;
    const totalPagesCount = this.getPageCount(total, 20);
    this.setState({ characters: data.data.results, totalPages: totalPagesCount });
  };
  
  getPageCount = ( total, denominator ) => {
		const divisible	= 0 === total % denominator;
		const valueToBeAdded = divisible ? 0 : 1;
		return Math.floor( total/denominator ) + valueToBeAdded;
	};
  
  changeCurrentPage = numPage => {
    this.setState({ currentPage: numPage });
    this.fetchCharacter(this.state.currentPage)
  };


  render() {
    const { characters, currentPage, totalPages } = this.state;
    return (
    <>
      <div className='Pagination--container'>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          changeCurrentPage={this.changeCurrentPage}
          theme="bottom-border"
        />
      </div>
      
      <div className="characters--wrapper">
        {characters.map(
          character =>
            // !character.thumbnail.path.includes('not_available') &&
            <Character character={character} key={character.id} />
        )}
      </div>

      <div className='Pagination--container'>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          changeCurrentPage={this.changeCurrentPage}
          theme="bottom-border"
        />
      </div>
          
    </>
    );
  }
}

export default CharacterList;
