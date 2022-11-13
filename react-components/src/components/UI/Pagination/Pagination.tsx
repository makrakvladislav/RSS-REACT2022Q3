import React, { memo } from 'react';
import ReactPaginate from 'react-paginate';
import { useAppDispatch } from 'store/hooks/redux';
import { changeMainPage, changeSearchPage } from 'store/reducers/ActionCreators';

import './Pagination.css';

interface IPaginationPros {
  pageType: string;
  pageCount: number;
  currentPage: number;
}

const Pagination = memo((props: IPaginationPros) => {
  const dispatch = useAppDispatch();

  const handlePageClick = (event: { selected: number }) => {
    if (props.pageType === 'search') {
      dispatch(changeSearchPage(event.selected + 1));
    }

    if (props.pageType === 'main') {
      dispatch(changeMainPage(event.selected + 1));
    }
  };

  return (
    <>
      <ReactPaginate
        className="pagination"
        activeClassName="active"
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        forcePage={props.currentPage - 1}
        previousLabel="<"
        pageCount={props.pageCount}
      />
    </>
  );
});

export default Pagination;
