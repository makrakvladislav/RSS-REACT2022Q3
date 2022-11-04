import React, { forwardRef, memo } from 'react';
import { InputProps } from '../Input/Input';

interface IToggleProps extends InputProps {
  type: string;
}

const Toggle = memo(
  forwardRef<HTMLInputElement, IToggleProps>(({ hasError, message, ...inputProps }, ref) => {
    return (
      <>
        <div className="flex items-center">
          <label
            htmlFor="green-toggle"
            className="inline-flex relative items-center mr-5 cursor-pointer"
          >
            <input ref={ref} {...inputProps} id="green-toggle" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-4 peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-green-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Subscribe to newsletter
            </span>
          </label>
        </div>
      </>
    );
  })
);

export default Toggle;
