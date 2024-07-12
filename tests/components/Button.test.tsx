import { render, screen } from '@testing-library/react';
import React from 'react';
import Button from '../../src/components/Button';

describe('Button', () => {
  test('Renders a button', () => {
    render(<Button label="Test" onClick={() => {}} />);

    const buttonElement = screen.getByRole('button', { name: 'Test' });

    expect(buttonElement).toBeInTheDocument();
  });
});
