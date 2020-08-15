import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
});

test('adding hello waseem test', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/hello waseem/i);
  expect(linkElement).toBeInTheDocument();
});
