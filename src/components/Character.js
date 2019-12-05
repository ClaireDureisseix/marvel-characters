import React from 'react';

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
        {character.name &&
          <strong>
            {character.name}
          </strong>}
        <em>
          Appears in {character.comics.available} comics!
        </em>
      </figcaption>
    </figure>
  );
};

export default Character;
