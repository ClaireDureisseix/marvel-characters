import React from 'react';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Title = () => {
  return (
    <div className="Title--wrapper">
      <h1 className="Title">MARVEL Encyclopedia</h1>
      <NavLink to="/" id="homeLink" className="CharShow--button">
        <FontAwesomeIcon className="fas fa-home" icon={faHome} />
      </NavLink>
    </div>
  );
};

export default Title;
