import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

import Title from './Title';
import apiId from '../apiId';

// Show page
class CharacterShow extends Component {
  state = {
    character: [],
    loading: false
  };

  componentDidMount() {
    this.fetchCharacter();
  }

  // Method which fetches the data with the id of the character clicked
  fetchCharacter() {
    const id = this.props.match.params.id;
    apiId(id).then(res => {
      this.setState({
        character: res.data.data.results[0],
        loading: true
      });
    });
  }

  render() {
    const { character, loading } = this.state;
    return (
      <div>
        <Title />
        <div className="CharShow--wrapper">
          {!loading && <div className="loader" />}
          <div className="CharShow--idContainer">
            {character.name &&
              character.thumbnail &&
              <img
                className="CharShow--img"
                src={`${character.thumbnail.path}.${character.thumbnail
                  .extension}`}
                alt={character.name}
              />}
            <div className="CharShow--idText">
              <h2>
                {character.name}
              </h2>
              {character.description &&
                <p className="CharShow--description">
                  {character.description}
                </p>}
              <h3 className="CharShow--statTitle">Statistics</h3>
              <p className="CharShow--stat">
                {character.name} appears in :{' '}
              </p>
              {character.comics &&
                character.series &&
                character.stories &&
                <ul>
                  {character.comics.available
                    ? <li className="CharShow--stats">
                        {character.comics.available} comics
                      </li>
                    : <p>No comics</p>}
                  {character.series.available
                    ? <li className="CharShow--stats">
                        {character.series.available} series
                      </li>
                    : <p>No serie</p>}
                  {character.stories.available
                    ? <li className="CharShow--stats">
                        {character.stories.available} stories
                      </li>
                    : <p>No storie</p>}
                </ul>}
            </div>
          </div>
          <div className="CharShow--lists">
            {character.comics && character.comics.available !== 0
              ? <div>
                  <h3>Comics</h3>
                  {character.comics.items.map((item, ind) =>
                    <p key={ind}>
                      {item.name}{' '}
                    </p>
                  )}
                </div>
              : <h3>No available comics</h3>}
            {character.series && character.series.available !== 0
              ? <div>
                  <h3>Series</h3>
                  {character.series.items.map((item, ind) =>
                    <p key={ind}>
                      {item.name}{' '}
                    </p>
                  )}
                </div>
              : <h3>No available series</h3>}
            {character.stories && character.stories.available !== 0
              ? <div>
                  <h3>Stories</h3>
                  {character.stories.items.map((item, ind) =>
                    <p key={ind}>
                      {item.name}{' '}
                    </p>
                  )}
                </div>
              : <h3>No available stories</h3>}
          </div>
        </div>
        <Link to="/">
          <div className="CharShow--back">
            <FontAwesomeIcon
              className="fas fa-arrow-circle-left"
              icon={faArrowCircleLeft}
            />
            <p>Back home</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default CharacterShow;
