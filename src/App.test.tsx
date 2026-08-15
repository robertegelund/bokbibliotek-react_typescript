import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders library header', () => {
  render(<App />);
  const headerElement = screen.getByText(/mitt bibliotek/i);
  expect(headerElement).toBeInTheDocument();
});
