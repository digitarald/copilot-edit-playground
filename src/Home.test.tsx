import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders h1 element', () => {
  render(<Home />);
  const headingElement = screen.getByRole('heading', { level: 1 });
  expect(headingElement).toBeInTheDocument();
});
