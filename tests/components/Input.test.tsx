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

    const element = screen.getByLabelText('Label');

    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute('id', 'testId');
    expect(element).toHaveAttribute('name', 'testName');
    expect(element).toHaveAttribute('type', 'text');
    expect(element).toHaveAttribute('min', '5');
    expect(element).toHaveAttribute('max', '10');
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

    const element = screen.getByLabelText('Label');

    fireEvent.change(element, { target: { value: 'new value' } });

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

      const element = screen.getByLabelText(`Label ${type}`);

      expect(element).toBeInTheDocument();
      expect(element).toHaveAttribute('type', type);
      cleanup();
    });
  });
});
