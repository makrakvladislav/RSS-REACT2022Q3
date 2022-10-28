import React, { forwardRef, memo } from 'react';
import { FieldError } from 'react-hook-form';

interface ISelectProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  options: Array<string>;
  hasError: FieldError | undefined | boolean;
  message: string;
}

const Select = memo(
  forwardRef<HTMLSelectElement, ISelectProps>(({ hasError, message, ...inputProps }, ref) => {
    return (
      <>
        <select
          ref={ref}
          {...inputProps}
          defaultValue="default"
          className={
            hasError
              ? 'w-full mb-2.5 bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg p-2.5'
              : 'w-full mb-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5'
          }
        >
          <option value="default" disabled>
            Choose a country
          </option>
          {inputProps.options.map((item: string, key: number) => {
            return (
              <option key={key} value={item}>
                {item}
              </option>
            );
          })}
        </select>
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

export default Select;
