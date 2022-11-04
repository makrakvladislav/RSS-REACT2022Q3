import { paginationMainAction, paginationSearchAction } from 'components/GlobalState/Actions';
import { useDispatch } from 'components/GlobalState/StateContext';
import React, { memo } from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.css';

interface IPaginationPros {
  pageType: string;
  pageCount: number;
  currentPage: number;
}

const Pagination = memo((props: IPaginationPros) => {
  const dispatch = useDispatch();

  const handlePageClick = (event: { selected: number }) => {
    if (props.pageType === 'search') {
      dispatch(paginationSearchAction(event.selected + 1, props.pageCount));
    }

    if (props.pageType === 'main') {
      dispatch(paginationMainAction(event.selected + 1, props.pageCount));
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
