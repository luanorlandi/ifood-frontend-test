import React from 'react';
import { render, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';

import Playlists from './Playlists';
import PlaylistsContextProvider from '../../contexts/PlaylistsContextProvider';

const playlists = [{
  id: '37i9dQZF1DXbYM3nMM0oPk',
  name: 'Mega Hit Mix',
  description: 'A mega mix of 75 of your favorite songs from the last few years! Cover: Post Malone',
  images: [{
    url: 'https://i.scdn.co/image/ab67706f00000002002b3728f0d5c5c599b9b06a',
  }],
  external_urls: {
    spotify: 'https://open.spotify.com/playlist/37i9dQZF1DXbYM3nMM0oPk',
  },
}, {
  id: '37i9dQZF1DX4sWSpwq3LiO',
  name: 'Peaceful Piano',
  description: 'Relax and indulge with beautiful piano pieces',
  images: [{
    url: 'https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6',
  }],
  external_urls: {
    spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwq3LiO',
  },
}];

test('playlists match snapshot', () => {
  const { asFragment } = render((
    <PlaylistsContextProvider initialPlaylists={playlists}>
      <Playlists />
    </PlaylistsContextProvider>
  ));

  expect(asFragment()).toMatchSnapshot();
});

test('filter playlists by name', async () => {
  const { getByPlaceholderText, getByText } = render((
    <PlaylistsContextProvider initialPlaylists={playlists}>
      <Playlists />
    </PlaylistsContextProvider>
  ));

  const filterPromise = waitForElementToBeRemoved(() => getByText(playlists[1].name));

  fireEvent.change(getByPlaceholderText('Filtrar pelo nome da playlist'), {
    target: { value: playlists[0].name },
  });

  await filterPromise;

  expect(getByText(playlists[0].name)).toBeInTheDocument();
});
