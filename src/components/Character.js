import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
//import { Link } from 'react-router-dom';

const Character = ({ character }) => {
  return (
    <figure className="CharCard">
      {character.name &&
        character.thumbnail &&
        <img
          className="CharCard--img"
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
        />}
      <figcaption className={'CharCard--subtitle'}>
        <div className="CharCard--text">
          <strong>
            {character.name}
          </strong>
          <em>
            Appears in {character.comics.available} comics!
          </em>
        </div>
        <FontAwesomeIcon className="fa-trash-alt" icon={faTrashAlt} />
      </figcaption>
    </figure>
  );
};

export default Character;
