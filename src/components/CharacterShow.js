import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

class CharacterShow extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
  }

  render() {
    return (
      <NavLink to="/" id="homeLink" className="CharShow--button">
        <FontAwesomeIcon icon={faHome} />
      </NavLink>
    );
  }
}

export default CharacterShow;
