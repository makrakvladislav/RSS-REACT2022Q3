import React, { memo } from 'react';
import { useAppDispatch, useAppselector } from 'store/hooks/redux';
import { setLimitPage, setLimitSearchPage } from 'store/reducers/ActionCreators';

interface IProps {
  page: string;
  options: Array<string>;
}

export const LimitSelector = memo((props: IProps) => {
  const dispatch = useAppDispatch();
  const stateSearchPage = useAppselector((state) => state.searchMovieReducer);
  const stateMainPage = useAppselector((state) => state.movieReducer);

  const handleQuantitySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (props.page === 'search') {
      dispatch(setLimitSearchPage(+e.target.value));
    }
    if (props.page === 'main') dispatch(setLimitPage(+e.target.value));
  };

  return (
    <select
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
      onChange={handleQuantitySelect}
    >
      {props.page === 'main' ? (
        <option defaultValue={stateMainPage.limit} value="">
          {stateMainPage.limit}
        </option>
      ) : (
        <option defaultValue={stateSearchPage.limit} value="">
          {stateSearchPage.limit}
        </option>
      )}

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
