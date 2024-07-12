import React from 'react';

interface InputProps {
  /**
   * @name id
   * @description The id for this input field.
   * @type string
   */
  id: string;
  /**
   * @name name
   * @description The name text for this input field.
   * @type string
   */
  name: string;
  /**
   * @name label
   * @description The label text for this input field.
   * @type string
   */
  label: string;
  /**
   * @name type
   * @description The type of input field.
   * @type 'text' | 'tel' | 'email'
   */
  type: string;
  /**
   * @name onChange
   * @description The function to be called when the onChange handler is called.
   * @type function
   */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * @name min
   * @description The minimum length for this input field. Optional.
   * @type number
   */
  min?: number;
  /**
   * @name max
   * @description The maximum length for this input field. Optional.
   * @type number
   */
  max?: number;
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
}

const Input = (props: InputProps) => {
  const {
    id,
    name,
    label,
    type,
    onChange,
    min,
    max,
    hero,
    hideLabel,
    cssClass,
  } = props;

  const baseStyles =
    'outline-none block w-full rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600';
  const styles = hero
    ? 'p-5 text-3xl font-thin'
    : 'py-1.5 px-8 sm:text-md sm:leading-6';
  const labelStyles = hideLabel ? 'sr-only' : '';

  return (
    <>
      <label className={`mb-3 ${labelStyles}`} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        onChange={onChange}
        min={min}
        max={max}
        className={`${baseStyles} ${styles} ${cssClass}`}
      />
    </>
  );
};

export default Input;
