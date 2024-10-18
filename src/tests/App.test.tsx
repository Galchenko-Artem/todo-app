
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../App';
console.log('window.matchMedia():', window.matchMedia('(max-width: 600px)'));

test('Добавление новой задачи', () => {
  render(<App />);
  const input = screen.getByPlaceholderText('Новая задача');
  const addButton = screen.getByText('Добавить');

  fireEvent.change(input, { target: { value: 'Тестовая задача' } });
  fireEvent.click(addButton);

  expect(screen.getByText('Тестовая задача')).toBeInTheDocument();
});

test('Переключение состояния задачи', () => {
  render(<App />);
  const input = screen.getByPlaceholderText('Новая задача');
  const addButton = screen.getByText('Добавить');

  fireEvent.change(input, { target: { value: 'Тестовая задача' } });
  fireEvent.click(addButton);

  const checkbox = screen.getByRole('checkbox', { name: 'Тестовая задача' });
  expect(checkbox).not.toBeChecked();

  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
});
