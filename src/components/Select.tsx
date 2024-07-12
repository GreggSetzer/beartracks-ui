import React from 'react';

export interface Option {
  /**
   * @name value
   * @description: The value for the select option.
   * @type string
   */
  value: string;
  /**
   * @name label
   * @description The label for the select option.
   * @type: string
   */
  label: string;
  /**
   * @name inactive
   * @description Determines if the option should be inactive. Optional.
   * @type: string
   */
  inactive?: boolean;
}

interface SelectProps {
  /**
   * @name id
   * @description The id for this select field.
   * @type string
   */
  id: string;
  /**
   * @name name
   * @description The name text for this select field.
   * @type string
   */
  name: string;
  /**
   * @name label
   * @description The label text for this select field.
   * @type string
   */
  label: string;
  /**
   * @name value
   * @description The value for this select menu.
   * @type string
   */
  value: string;
  /**
   * @name onChange
   * @description The function to be called when the onChange handler is called.
   * @type function
   */
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  /**
   * @name hero
   * @description Set the component to an extra large size for placement in a hero. Optional.
   * @type boolean
   */
  hero?: boolean;
  /**
   * @name hideLabel
   * @description If true, this label will be hidden from the UI and only accessible to assistive technologies. Optional.
   * @type boolean
   */
  hideLabel?: boolean;
  /**
   * @name cssClass
   * @description Apply custom styles if necessary. Optional.
   * @type string
   */
  cssClass?: string;
  /**
   * @name options
   * @description The list of options to display in the select menu.
   * @type Option[]
   */
  options: Option[];
}

const Select = (props: SelectProps) => {
  const { id, name, label, onChange, hero, hideLabel, options, value } = props;

  const baseStyles =
    'outline-none block w-full rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600';
  const styles = hero
    ? 'custom-select p-5 text-xl font-thin'
    : 'py-1.5 px-8 sm:text-md sm:leading-6';
  const labelStyles = hideLabel ? 'sr-only' : '';

  const optionsList = options.map((option: Option) => {
    return (
      <option
        key={option.value}
        value={option.value}
        disabled={option.inactive}
      >
        {option.label}
      </option>
    );
  });

  return (
    <>
      <label className={`mb-3 ${labelStyles}`} htmlFor={id}>
        {label}
      </label>
      <select
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        className={`${baseStyles} ${styles}`}
      >
        {optionsList}
      </select>
    </>
  );
};

export default Select;
