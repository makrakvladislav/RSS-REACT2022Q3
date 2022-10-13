import React from 'react';
import IInputProps from 'interface/IInputProps';

type Ref = HTMLInputElement | null;

const Input = React.forwardRef<Ref, IInputProps>((props, ref) => {
  return (
    <>
      <div className="flex items-center">
        <input
          ref={ref}
          {...props}
          className={
            !props.iserror
              ? 'w-full bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg p-2.5'
              : 'w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5'
          }
        />
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
