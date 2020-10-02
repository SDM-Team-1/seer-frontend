import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


test('renders From datepicker label', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/From/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders To datepicker label', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/To/i);
  expect(linkElement).toBeInTheDocument();
});
