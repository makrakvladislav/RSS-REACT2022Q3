import React, { memo } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.css';

interface IPaginationPros {
  pageCount: number;
}

const Pagination = memo((props: IPaginationPros) => {
  console.log(props);
  return (
    <>
      <ReactPaginate
        className={styles.pagination}
        breakLabel="..."
        nextLabel="next >"
        pageRangeDisplayed={5}
        previousLabel="< previous"
        pageCount={props.pageCount}
      />
    </>
  );
});

export default Pagination;
