import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import Input from '../../src/components/Input';
import Select, { Option } from '../../src/components/Select';
import React from 'react';

const labelName = 'Select an Option'
const options: Option[] = [
  { label: 'Option 1', value: '1', inactive: false },
  { label: 'Option 2', value: '2', inactive: false },
  { label: 'Option 3', value: '3', inactive: true },
];

const renderElement = (onChange = () => {}) => {
  return (
    <Select
      id="testId"
      name="testName"
      label={labelName}
      value="1"
      onChange={onChange}
      options={options}
    />
  );
}

describe('Select Component', () => {
  afterEach(cleanup);

  test('Renders a select input field with the correct attributes', () => {
    render(renderElement());

    const element = screen.getByLabelText(labelName);

    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute('id', 'testId');
    expect(element).toHaveAttribute('name', 'testName');

    expect(screen.getAllByRole('option')).toHaveLength(options.length);
  });

  test('Renders a select input field with the correct options', () => {
    render(renderElement());

    const optionElements = screen.getAllByRole('option');
    options.forEach((option, index) => {
      expect(optionElements[index]).toHaveTextContent(option.label);
      expect(optionElements[index]).toHaveAttribute('value', option.value);
      if (option.inactive) {
        expect(optionElements[index]).toBeDisabled();
      }
    });
  });

  test('Calls the onChange handler when the value changes', () => {
    const handleChange = jest.fn();

    render(renderElement(handleChange));

    const element = screen.getByLabelText(labelName);

    fireEvent.change(element, { target: { value: '2' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('Applies the custom hero css treatment', () => {
    render(
      <Select
        id="labelId"
        name="labelName"
        label="Label"
        value="1"
        onChange={() => {}}
        options={options}
        hero={true}
      />
    );

    const element = screen.getByRole('combobox');
    expect(element).toHaveClass('custom-select');
  });

  test('Hides label when hideLabel is true', () => {
    render(
      <Select
        id="hiddenLabelId"
        name="hiddenLabelName"
        label="Hidden label"
        value="3"
        onChange={() => {}}
        options={options}
        hideLabel={true}
      />
    );

    const element = screen.getByText('Hidden label');
    expect(element).toHaveClass('sr-only');
  });
});