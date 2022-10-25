import InputProps from 'interface/IInputProps';
import React, { forwardRef } from 'react';

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ ...inputProps }: InputProps, ref: React.Ref<HTMLInputElement>) => {
    return (
      <>
        <div className="flex items-center">
          <input
            ref={ref}
            {...inputProps}
            placeholder={inputProps.name}
            className={
              inputProps.error.hasError
                ? 'w-full bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg p-2.5'
                : 'w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5'
            }
          />
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

export default Input;
