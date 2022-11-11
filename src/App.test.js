import { render, screen } from '@testing-library/react';
import Inbox from './inbox';

test('renders learn react link', () => {
  render(<Inbox />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
