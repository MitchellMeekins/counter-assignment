// Import necessary React testing library helpers
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// Import the Counter component
import Counter from '../components/Counter';

test('renders counter message', () => 
{
  render(<Counter />);
  var counterText = 'Counter';
  expect(screen.getByText(counterText)).toBeInTheDocument();
});

test('should render initial count with value of 0', () => 
{
  render(<Counter />);
  var initialValueTest = '0';
  expect(screen.getByTestId('count')).toHaveTextContent(initialValueTest);
});

test('clicking + increments the count', () => 
{
  render(<Counter />);
const countElement = screen.getByTestId('count');
const initialCount = parseInt(countElement.textContent, 10);

  fireEvent.click(screen.getByText('+'));
const newCountElement = screen.getByTestId('count');
const newCount = parseInt(countElement.textContent, 10);
var countDiff = newCount - initialCount;
expect(countDiff).toBe(1);
});

test('clicking - decrements the count', () => 
{
  render(<Counter />);
  const countElement = screen.getByTestId('count');
const initialCount = parseInt(countElement.textContent, 10);

  fireEvent.click(screen.getByText('-'));
const newCountElement = screen.getByTestId('count');
const newCount = parseInt(countElement.textContent, 10);
var countDiff = initialCount - newCount;
expect(countDiff).toBe(1);
});
