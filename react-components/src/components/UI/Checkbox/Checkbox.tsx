import React, { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  label: string;
  error: { hasError?: FieldError | undefined | boolean; message: string };
}

const Checkbox = forwardRef<HTMLInputElement, InputProps>(
  ({ ...inputProps }: InputProps, ref: React.Ref<HTMLInputElement>) => {
    return (
      <>
        <div className="flex items-center">
          <input
            ref={ref}
            {...inputProps}
            id="checkbox"
            className={
              inputProps.error.hasError
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
            inputProps.error.hasError
              ? 'flex mt-1 text-sm text-red-600 opacity-1 transition-opacity duration-300'
              : 'flex mt-1 text-sm text-red-600 opacity-0 transition-opacity duration-300'
          }
        >
          {inputProps.error.message}
        </div>
      </>
    );
  }
);

export default Checkbox;
