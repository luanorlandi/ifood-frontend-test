import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

test('first render with Spotifood title', () => {
  const { getByText } = render(<App />);
  expect(getByText(/Spotifood/i)).toBeInTheDocument();
});
