import React, { memo } from 'react';
import { useAppDispatch, useAppselector } from 'store/hooks/redux';
import { setLimitPage, setLimitSearchPage } from 'store/reducers/ActionCreators';

interface IProps {
  page: string;
  options: Array<string>;
}

export const LimitSelector = memo((props: IProps) => {
  const dispatch = useAppDispatch();
  const limitSearchPage = useAppselector((state) => state.searchPageState.limit);
  const limitMainPage = useAppselector((state) => state.mainPageState.limit);
  let limit;

  if (props.page === 'search') {
    limit = limitSearchPage;
  }
  if (props.page === 'main') {
    limit = limitMainPage;
  }

  const handleQuantitySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (props.page === 'search') {
      dispatch(setLimitSearchPage(+e.target.value));
    }
    if (props.page === 'main') dispatch(setLimitPage(+e.target.value));
  };

  return (
    <select
      defaultValue={limit}
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

export default LimitSelector;
