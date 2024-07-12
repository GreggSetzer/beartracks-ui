import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import React from 'react';
import Input from '../../src/components/Input';

describe('Input Component', () => {
  afterEach(cleanup);

  test('Renders an input field with the correct attributes', () => {
    render(
      <Input
        type="text"
        id="testId"
        name="testName"
        label="Label"
        onChange={() => {}}
        min={5}
        max={10}
      />
    );

    const inputElement = screen.getByLabelText('Label');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('id', 'testId');
    expect(inputElement).toHaveAttribute('name', 'testName');
    expect(inputElement).toHaveAttribute('type', 'text');
    expect(inputElement).toHaveAttribute('min', '5');
    expect(inputElement).toHaveAttribute('max', '10');
  });

  test('Calls the onChange handler when the input value changes', () => {
    const handleChange = jest.fn();

    render(
      <Input
        type="text"
        id="testId"
        name="testName"
        label="Label"
        onChange={handleChange}
        min={5}
        max={10}
      />
    );

    const inputElement = screen.getByLabelText('Label');

    fireEvent.change(inputElement, { target: { value: 'new value' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('Handles different input types correctly', () => {
    const types: Array<{ type: string }> = [
      { type: 'text' },
      { type: 'email' },
      { type: 'tel' },
    ];

    types.forEach(({ type }) => {
      render(
        <Input
          type={type}
          id="testId"
          name="testName"
          label={`Label ${type}`}
          onChange={() => {}}
        />
      );

      const inputElement = screen.getByLabelText(`Label ${type}`);

      expect(inputElement).toBeInTheDocument();
      expect(inputElement).toHaveAttribute('type', type);
      cleanup();
    });
  });
});
