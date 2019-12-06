import React, { Component } from 'react';

import 'react-pagination-library/build/css/index.css';

import Character from './Character';
import Pagination from 'react-pagination-library';
import api from '../api';

class CharacterList extends Component {
  state = {
    characters: [],
    message: '',
    currentPage: 1,
    totalPages: 0
  };

  componentDidMount() {
    this.fetchCharacter(this.state.totalPages);
  }

  fetchCharacter = async pageNb => {
    api(pageNb).then(res => {
      console.log(res);

      const total = res.data.data.total;
      const totalPagesCount = this.getPageCount(total, 20);
      this.setState({
        characters: res.data.data.results,
        totalPages: totalPagesCount - 1
      });
    });
  };

  getPageCount = (total, denominator) => {
    const divisible = 0 === total % denominator;
    const valueToBeAdded = divisible ? 0 : 1;
    return Math.floor(total / denominator) + valueToBeAdded;
  };

  changeCurrentPage = numPage => {
    this.setState({ currentPage: numPage }, () =>
      this.fetchCharacter(this.state.currentPage)
    );
  };

  render() {
    const { characters, currentPage, totalPages } = this.state;
    return (
      <div className="Home--wrapper">
        <div className="Pagination--container">
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
              !character.thumbnail.path.includes('not_available') &&
              <Character character={character} key={character.id} />
          )}
        </div>

        <div className="Pagination--container">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            changeCurrentPage={this.changeCurrentPage}
            theme="bottom-border"
          />
        </div>
      </div>
    );
  }
}

export default CharacterList;
