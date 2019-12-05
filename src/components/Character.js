import React from 'react';

const Character = ({ character }) => {
  return (
    <figure className="CharCard">
      {character.name &&
        character.thumbnail.path &&
        <img
          className="CharCard--img"
          src={`${character.thumbnail.path}.jpg`}
          alt={character.name}
        />}
      <figcaption className={'CharCard--subtitle'}>
        {character.name &&
          <strong>
            {character.name}
          </strong>}
        {character.comics.available &&
          <em>
            Appears in {character.comics.available} comics!
          </em>}
      </figcaption>
    </figure>
  );
};

export default Character;
