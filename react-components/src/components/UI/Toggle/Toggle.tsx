import React from 'react';
import { FieldError } from 'react-hook-form';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  error: { hasError?: FieldError | undefined | boolean; message: string };
}

const Toggle = React.forwardRef<HTMLInputElement, InputProps>(
  ({ ...inputProps }: InputProps, ref: React.Ref<HTMLInputElement>) => {
    return (
      <>
        <div className="flex items-center">
          <label
            htmlFor="green-toggle"
            className="inline-flex relative items-center mr-5 cursor-pointer"
          >
            <input ref={ref} {...inputProps} id="green-toggle" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Subscribe to newsletter
            </span>
          </label>
        </div>
      </>
    );
  }
);

export default Toggle;
