import React from 'react';
import IInputProps from 'interface/IInputProps';

type Ref = HTMLInputElement | null;

const Input = React.forwardRef<Ref, IInputProps>(({ ...props }, ref) => {
  const labelState = props.label?.length ? true : false;
  let label;
  let input;

  if (labelState) {
    label = (
      <label htmlFor="checkbox" className="ml-2 text-sm font-medium text-gray-900">
        {props.label}
      </label>
    );
    input = (
      <input
        id="checkbox"
        ref={ref}
        {...props}
        className="w-4 h-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  p-2.5"
      />
    );
  } else if (!props.errorstate) {
    input = (
      <input
        ref={ref}
        {...props}
        className="w-full bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg  p-2.5"
      />
    );
  } else {
    input = (
      <input
        ref={ref}
        {...props}
        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  p-2.5"
      />
    );
  }
  return (
    <>
      <div className="flex items-center">
        {input}
        {label}
      </div>
      {!props.errorstate ? (
        <div className="flex mt-1 text-sm text-red-600 opacity-1">{props.errormessage}</div>
      ) : (
        <div className="flex mt-1 text-sm text-red-600 opacity-0">{props.errormessage}</div>
      )}
    </>
  );
});

export default Input;
