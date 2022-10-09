import React from 'react';
import ISelectProps from 'interface/ISelectProps';

type Ref = HTMLSelectElement | null;

const Select = React.forwardRef<Ref, ISelectProps>((props, ref) => {
  return (
    <select
      ref={ref}
      {...props}
      className="w-full mb-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
    >
      <option selected>Choose a country</option>
      <>
        {props.options.map((item: string, key: number) => {
          return (
            <option key={key} value={item}>
              {item}
            </option>
          );
        })}
      </>
    </select>
  );
});

export default Select;
