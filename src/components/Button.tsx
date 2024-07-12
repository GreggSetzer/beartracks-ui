import React from 'react';

interface ButtonProps {
  /**
   * @name label
   * @description The label text to appear inside the button.
   * @type string
   */
  label: string;

  /**
   * @name onClick
   * @description The function to be called when the button is clicked.
   * @type function
   */
  onClick: () => void;

  /**
   * @name primary
   * @description If true, we will apply a primary CSS treatment on this button. Optional.
   * @type boolean
   * TODO: Find a better solution for this.
   */
  primary?: boolean;
}

const Button = ({ label, onClick, primary }: ButtonProps) => {
  const style = primary
    ? 'bg-green-600 text-2xl font-medium text-white'
    : 'bg-gray-300 text-black';
  const baseStyles =
    'outline-none block w-full rounded-md border-0 px-8 py-4 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600';

  return (
    <button onClick={onClick} className={`${style} ${baseStyles}`}>
      {label}
    </button>
  );
};

export default Button;
