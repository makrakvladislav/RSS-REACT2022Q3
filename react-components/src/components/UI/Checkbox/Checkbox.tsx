import React from 'react';
import ICheckboxProps from 'interface/ICheckboxProps';

type Ref = HTMLInputElement | null;

const Input = React.forwardRef<Ref, ICheckboxProps>((props, ref) => {
  return (
    <>
      <div className="flex items-center">
        <input
          id="checkbox"
          ref={ref}
          {...props}
          className="w-4 h-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
        />
        <label htmlFor="checkbox" className="ml-2 text-sm font-medium text-gray-900">
          {props.label}
        </label>
      </div>

      <div
        className={
          !props.iserror
            ? 'flex mt-1 text-sm text-red-600 opacity-1 transition-opacity duration-300'
            : 'flex mt-1 text-sm text-red-600 opacity-0 transition-opacity duration-300'
        }
      >
        {props.errormessage}
      </div>
    </>
  );
});

export default Input;
