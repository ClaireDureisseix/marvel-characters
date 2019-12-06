import React, { Component } from 'react';

import 'react-pagination-library/build/css/index.css';
import './pagination.css';

import Character from './Character';
import Pagination from 'react-pagination-library';
import api from '../api';

class CharacterList extends Component {
  state = {
    characters: [],
    loading: false,
    message: '',
    currentPage: 1,
    totalPages: 0
  };

  // Displays the data when the app is running
  componentDidMount() {
    this.fetchCharacter(this.state.totalPages);
  }

  // Fetch method with axios (the function is on a separate file in order gitignored it)
  fetchCharacter = async pageNb => {
    api(pageNb)
      .then(res => {
        const total = res.data.data.total;
        const totalPagesCount = this.getPageCount(total, 20);
        this.setState({
          characters: res.data.data.results,
          loading: true,
          totalPages: totalPagesCount - 1
        });
      })
      .catch(error =>
        this.setState({
          message: 'Failed to fetch heroes. Please check your connexion',
          loading: false
        })
      );
  };

  // Method which calculates total number of pages
  getPageCount = (total, denominator) => {
    const divisible = 0 === total % denominator;
    const valueToBeAdded = divisible ? 0 : 1;
    return Math.floor(total / denominator) + valueToBeAdded;
  };

  // Method which handle click on pagination buttons
  changeCurrentPage = numPage => {
    this.setState({ currentPage: numPage }, () =>
      this.fetchCharacter(this.state.currentPage)
    );
  };

  render() {
    const {
      characters,
      currentPage,
      totalPages,
      message,
      loading
    } = this.state;
    return (
      <div className="Home--wrapper">
        <div className="Pagination--container">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            changeCurrentPage={this.changeCurrentPage}
            theme="square-fill"
          />
        </div>

        {!loading && <div className="loader" />}

        {message &&
          <p className="error-message">
            {message}
          </p>}

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
            theme="square-fill"
          />
        </div>
      </div>
    );
  }
}

export default CharacterList;
