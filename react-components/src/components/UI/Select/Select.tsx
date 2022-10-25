import React from 'react';
import { FieldError } from 'react-hook-form';

interface InputProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  options: Array<string>;
  error: { hasError?: FieldError | undefined | boolean; message: string };
}

const Select = React.forwardRef<HTMLSelectElement, InputProps>(
  ({ ...inputProps }: InputProps, ref: React.Ref<HTMLSelectElement>) => {
    return (
      <>
        <select
          ref={ref}
          {...inputProps}
          defaultValue="default"
          className={
            inputProps.error.hasError
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

export default Select;
