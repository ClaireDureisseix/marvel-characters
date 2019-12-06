import React, { Component } from 'react';

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
    console.log(id);
    
    apiId(id).then(res => {
      console.log(res.data.data.results[0]);
      this.setState({ character: res.data.data.results[0] })
      console.log('state', this.state.character);
    })
  }

  render() {
    const {character} = this.state
    return (
      <>
      <Title />
      <div className='CharShow--wrapper'>
        <h2>{character.name}</h2>
      </div>
      </>
    );
  }
}

export default CharacterShow;
