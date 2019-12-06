import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

import Title from './Title'
import apiId from '../apiId';

class CharacterShow extends Component {
  state = {
    character: []
  }

  componentDidMount() {
    this.fetchCharacter()
  }

  fetchCharacter = () => {
    const id = this.props.match.params.id;    
    apiId(id).then(res => {
      this.setState({ character: res.data.data.results[0] })
    })
  }

  render() {
    const {character} = this.state
    return (
      <>
      <Title />
      <div className='CharShow--wrapper'>
        <div className='CharShow--idContainer'>
          {character.name &&
            character.thumbnail &&
          <img
            className="CharShow--img"
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
          />}
          <div className='CharShow--idText'>
            <h2>{character.name}</h2>
            {character.description && 
              <p className='CharShow--description'>{character.description}</p>
            }
            <h3 className='CharShow--statTitle'>Statistics</h3>
            <p className='CharShow--stat'>{character.name} appears in : </p>
            {character.comics && character.series && character.stories ?
            
            <ul>
              { character.comics.returned ?
                <li className='CharShow--stats'>{character.comics.returned} comics</li> : null
              }
              { character.series.returned ? 
                <li className='CharShow--stats'>{character.series.returned} series</li> : null
              }
              { character.stories.returned ?
                <li className='CharShow--stats'>{character.stories.returned} stories</li> : null
              }
            </ul> : (<h3>No Statistics</h3>)}
          </div>
        </div>
        <div className='CharShow--lists'>
          <div>
            <h3>Comics</h3>
            {character.comics
              ? character.comics.items.map((item, ind) => <p key={ind}>{item.name} </p>)
              : null}
          </div>
          <div>
            <h3>Series</h3>
            {character.series
              ? character.series.items.map((item, ind) => <p key={ind}>{item.name} </p>)
              : null}
          </div>
          <div>
            <h3>Stories</h3>  
            {character.stories
              ? character.stories.items.map((item, ind) => <p key={ind}>{item.name} </p>)
              : null}
          </div>
        </div>
      </div>
      <Link to="/">
        <div className='CharShow--back'>
          <FontAwesomeIcon className="fas fa-arrow-circle-left" icon={faArrowCircleLeft} />
          <p>Back home</p>
        </div>
      </Link>
      </>
    );
  }
}

export default CharacterShow;
