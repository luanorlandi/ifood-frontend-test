import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import './PlaylistCard.scss';

const PlaylistCard = ({ playlist }) => {
  const { name, description } = playlist;
  const imageUrl = get(playlist, 'images[0].url');
  const tracksTotal = get(playlist, 'tracks.total');
  const spotifyLink = get(playlist, 'external_urls.spotify');

  return (
    <a href={spotifyLink} className="playlist-card">
      <img src={imageUrl} alt="Capa da playlist" />
      <div>
        <div>{name}</div>
        <div>{description}</div>
        <div>{tracksTotal}</div>
      </div>
    </a>
  );
};

PlaylistCard.propTypes = {
  playlist: PropTypes.object.isRequired,
};

export default PlaylistCard;
