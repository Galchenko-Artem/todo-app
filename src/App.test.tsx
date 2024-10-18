import { render, screen } from '@testing-library/react';
import App from './App';

test('отображается заголовок ToDo Приложение', () => {
  render(<App />);
  const headerElement = screen.getByText(/ToDo Приложение/i);
  expect(headerElement).toBeInTheDocument();
});
