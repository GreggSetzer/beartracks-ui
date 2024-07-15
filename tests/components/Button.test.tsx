import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Button from '../../src/components/Button';

describe('Button Component', () => {
  test('Renders a button', () => {
    render(<Button label="Test" onClick={() => {}} />);

    const buttonElement = screen.getByRole('button', { name: 'Test' });

    expect(buttonElement).toBeInTheDocument();
  });
  test('Renders a button with primary styling applied', () => {
    render(<Button label="Test" primary={true} onClick={() => {}} />);

    const buttonElement = screen.getByRole('button', { name: 'Test' });

    // Regex allows for the background color to change, and ensuring the test is less brittle.
    expect(buttonElement.className).toMatch(/bg-\w+-\d+/);
  });

  test('Renders a button with non-primary styling applied', () => {
    render(<Button label="Test" primary={false} onClick={() => {}} />);

    const buttonElement = screen.getByRole('button', { name: 'Test' });

    expect(buttonElement.className).toMatch(/bg-gray-300/);
  });

  test('Calls the onClick handler', () => {
    const handleOnClick = jest.fn();

    render(<Button label="Test" onClick={handleOnClick} />);

    const buttonElement = screen.getByRole('button', { name: 'Test' });

    fireEvent.click(buttonElement);

    expect(handleOnClick).toHaveBeenCalledTimes(1);
  });
});
