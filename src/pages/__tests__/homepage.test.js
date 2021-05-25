import { render, screen } from '@testing-library/react';
import HomePage from '../HomePage/HomePage';

test('renders learn react link', () => {
  render(<HomePage />);
  const homeTitle = screen.getByText(/HomePage/i);
  expect(homeTitle).toBeInTheDocument();
});
