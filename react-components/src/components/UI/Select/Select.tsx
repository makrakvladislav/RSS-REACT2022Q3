import React from 'react';
import ISelectProps from 'interface/ISelectProps';

type Ref = HTMLSelectElement | null;

const Select = React.forwardRef<Ref, ISelectProps>((props, ref) => {
  return (
    <>
      <select
        ref={ref}
        {...props}
        defaultValue="default"
        className={
          !props.errorstate
            ? 'w-full mb-2.5 bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg p-2.5'
            : 'w-full mb-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5'
        }
      >
        <option value="default" disabled>
          Choose a country
        </option>
        {props.options.map((item: string, key: number) => {
          return (
            <option key={key} value={item}>
              {item}
            </option>
          );
        })}
      </select>
      <div
        className={
          !props.errorstate
            ? 'flex mt-1 text-sm text-red-600 opacity-1 transition-opacity duration-300'
            : 'flex mt-1 text-sm text-red-600 opacity-0 transition-opacity duration-300'
        }
      >
        {props.errormessage}
      </div>
    </>
  );
});

export default Select;
