import React, { forwardRef, memo } from 'react';
import { InputProps } from '../Input/Input';

interface ICheckboxProps extends InputProps {
  type: string;
  label: string;
}

const Checkbox = memo(
  forwardRef<HTMLInputElement, ICheckboxProps>(({ hasError, message, ...inputProps }, ref) => {
    return (
      <>
        <div className="flex items-center">
          <input
            ref={ref}
            {...inputProps}
            id="checkbox"
            className={
              hasError
                ? 'h-4 w-4 bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg p-2.5'
                : 'h-4 w-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5'
            }
          />
          <label htmlFor="checkbox" className="ml-2 text-sm font-medium text-gray-900">
            {inputProps.label}
          </label>
        </div>
        <div
          className={
            hasError
              ? 'flex mt-1 text-sm text-red-600 opacity-1 transition-opacity duration-300'
              : 'flex mt-1 text-sm text-red-600 opacity-0 transition-opacity duration-300'
          }
        >
          {message}
        </div>
      </>
    );
  })
);

export default Checkbox;
