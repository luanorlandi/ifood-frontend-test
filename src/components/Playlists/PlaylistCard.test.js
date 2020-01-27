import React from 'react';
import { render } from '@testing-library/react';

import PlaylistCard from './PlaylistCard';

const playlist = {
  id: '37i9dQZF1DX4sWSpwq3Lia',
  name: 'Sleep',
  description: 'Gentle ambient piano to help you fall asleep.',
  images: [{ url: 'https://i.scdn.co/image/ab67706f00000002b70e0223f544b1faa2e95ed0' }],
  external_urls: {
    spotify: 'https://open.spotify.com/playlist/37i9dQZF1DWZd79rJ6a7lp',
  },
};

test('playlist card match snapshot', () => {
  const { asFragment } = render((
    <PlaylistCard playlist={playlist} />
  ));

  expect(asFragment()).toMatchSnapshot();
});

test('playlist card has a link', async () => {
  const { container } = render((
    <PlaylistCard playlist={playlist} />
  ));

  // not advisible to query by element
  // but in this case it's intended to assert that the card always has a link
  const linkElement = container.querySelector('a');
  expect(linkElement).toHaveAttribute('href', playlist.external_urls.spotify);
});
