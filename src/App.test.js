import { render, screen } from '@testing-library/react';
import App from './App';

test('renders self introduction section', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /self introduction/i });
  expect(heading).toBeInTheDocument();
});
