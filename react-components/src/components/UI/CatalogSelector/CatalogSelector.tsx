import { limitPerPageAction, sortPageAction } from 'components/GlobalState/Actions';
import { useDispatch } from 'components/GlobalState/StateContext';
import React, { memo } from 'react';

interface IProps {
  type: string;
  options: Array<string>;
}

export const CatalogSelector = memo((props: IProps) => {
  const dispatch = useDispatch();

  const handleQuantitySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (props.type === 'limit') dispatch(limitPerPageAction(+e.target.value));
    if (props.type === 'sort') dispatch(sortPageAction(e.target.value));
  };

  return (
    <select
      defaultValue="default"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
      onChange={handleQuantitySelect}
    >
      {props.options.map((item: string, key: number) => {
        return (
          <option key={key} value={item}>
            {item}
          </option>
        );
      })}
    </select>
  );
});

export default CatalogSelector;
