import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

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
          {character.comics.available
            ? <em>
                Appears in {character.comics.available} comics!
              </em>
            : null}
        </div>
        <Link to={`/character/${character.id}`}>
          <FontAwesomeIcon className="fas fa-eye" icon={faEye} />
        </Link>
      </figcaption>
    </figure>
  );
};

export default Character;
