import React from 'react';
import IInputProps from 'interface/IInputProps';

type Ref = HTMLInputElement | null;

const Input = React.forwardRef<Ref, IInputProps>((props, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  p-2.5 dark:border-slate-700 dark:border-slate-700 dark:placeholder-gray-400 dark:text-white"
    />
  );
});

export default Input;
