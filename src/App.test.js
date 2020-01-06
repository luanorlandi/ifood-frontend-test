import React from 'react';
import { render } from '@testing-library/react'; // TODO ver se mantem esta lib
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
