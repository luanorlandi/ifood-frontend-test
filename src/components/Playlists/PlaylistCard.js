import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import './PlaylistCard.scss';

const PlaylistCard = ({ playlist }) => {
  const { name, description } = playlist;
  const imageUrl = get(playlist, 'images[0].url');
  const spotifyLink = get(playlist, 'external_urls.spotify');

  return (
    <a href={spotifyLink} className="playlist-card">
      <img
        className="playlist-card__image"
        src={imageUrl}
        alt="Capa da playlist"
      />
      <div>
        <div className="playlist-card__title">{name}</div>
        <div>{description}</div>
      </div>
    </a>
  );
};

PlaylistCard.propTypes = {
  playlist: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.array,
    external_urls: PropTypes.object,
  }).isRequired,
};

export default PlaylistCard;
