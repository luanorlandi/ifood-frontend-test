import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import axios from 'axios';
import isEqual from 'lodash/isEqual';

import Home from './Home';
import PlaylistsContextProvider from '../../contexts/PlaylistsContextProvider';

jest.mock('axios');

const filters = [{
  id: 'locale',
  name: 'Locale',
  values: [
    { value: 'en_AU', name: 'en_AU' },
    { value: 'de_DE', name: 'de_DE' },
    { value: 'pt_BR', name: 'pt_BR' },
    { value: 'fr_FR', name: 'fr_FR' },
    { value: 'en_US', name: 'en_US' },
    { value: 'es_AR', name: 'es_AR' },
  ],
}, {
  id: 'country',
  name: 'País',
  values: [
    { value: 'AU', name: 'Australia' },
    { value: 'DE', name: 'Alemanhã' },
    { value: 'BR', name: 'Brasil' },
    { value: 'PT', name: 'Portugal' },
    { value: 'en_US', name: 'EUA' },
    { value: 'RU', name: 'Rússia' },
  ],
}, {
  id: 'timestamp',
  name: 'Data e Horário',
  validation: {
    primitiveType: 'STRING',
    entityType: 'DATE_TIME',
    pattern: 'yyyy-MM-ddTHH:mm:ss',
  },
}, {
  id: 'limit',
  name: 'Quantidade',
  validation: {
    primitiveType: 'INTEGER',
    min: 1,
    max: 50,
  },
}, {
  id: 'offset',
  name: 'Página',
  validation: {
    primitiveType: 'INTEGER',
  },
}];

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

const filterParams = {
  locale: 'pt_BR',
  country: 'BR',
  timestamp: new Date('2020-01-27T01:05:05.000Z'),
  limit: 1,
  offset: 1,
};

axios.get.mockImplementation((url, config) => {
  switch (url) {
    case 'https://api.spotify.com/v1/browse/featured-playlists': {
      if (isEqual(config.params, filterParams)) {
        return Promise.resolve({
          data: {
            playlists: {
              items: playlists,
            },
          },
        });
      }

      return Promise.resolve({
        data: {
          playlists: {
            items: [],
          },
        },
      });
    }
    case 'https://www.mocky.io/v2/5a25fade2e0000213aa90776':
      return Promise.resolve({
        data: {
          filters,
        },
      });
    default:
      return Promise.reject(new Error('axios mock not found'));
  }
});

test('render playlists from a form submit', async () => {
  const { getByText, getByLabelText } = render((
    <PlaylistsContextProvider>
      <Home />
    </PlaylistsContextProvider>
  ));

  await waitForElement(() => getByText('Buscar playlists'));

  fireEvent.change(getByLabelText('Locale'), {
    target: { value: 'pt_BR' },
  });

  fireEvent.change(getByLabelText('País'), {
    target: { value: 'BR' },
  });

  fireEvent.change(getByLabelText('Data e Horário'), {
    target: { value: new Date('2020-01-27T01:05:05.000Z') },
  });

  fireEvent.change(getByLabelText('Quantidade'), {
    target: { value: 1 },
  });

  fireEvent.change(getByLabelText('Página'), {
    target: { value: 1 },
  });

  fireEvent.click(getByText('Buscar playlists'));

  await waitForElement(() => getByText('Mega Hit Mix'));

  expect(getByText('Mega Hit Mix')).toBeInTheDocument();
  expect(getByText('Relax and indulge with beautiful piano pieces')).toBeInTheDocument();
});
