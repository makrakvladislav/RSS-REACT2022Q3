import React, { memo } from 'react';
import { useAppDispatch, useAppselector } from 'store/hooks/redux';
import { setSortType } from 'store/reducers/ActionCreators';

interface IProps {
  options: Array<string>;
}

export const SortSelector = memo((props: IProps) => {
  const dispatch = useAppDispatch();
  const { sortType } = useAppselector((state) => state.mainPageState);

  const handleQuantitySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortType(e.target.value));
  };

  return (
    <>
      <select
        defaultValue={sortType}
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
    </>
  );
});

export default SortSelector;
