import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import axios from 'axios';

import NavbarFilter from './NavbarFilter';
import PlaylistsContextProvider from '../../contexts/PlaylistsContextProvider';

jest.mock('axios');

const filters = [
  {
    id: 'select',
    name: 'Select',
    values: [
      {
        value: 'option1',
        name: 'Select option 1',
      },
      {
        value: 'option2',
        name: 'Select option 2',
      },
    ],
  },
  {
    id: 'integer',
    name: 'Integer',
    validation: {
      primitiveType: 'INTEGER',
    },
  },
];

test('render form using fields from the filters', async () => {
  axios.get.mockResolvedValueOnce({
    data: {
      filters,
    },
  });

  const { getByText, getByLabelText } = render((
    <PlaylistsContextProvider>
      <NavbarFilter />
    </PlaylistsContextProvider>
  ));

  await waitForElement(() => getByText('Buscar playlists'));

  expect(getByLabelText('Select')).toBeInTheDocument();
  expect(getByLabelText('Integer')).toBeInTheDocument();
});
