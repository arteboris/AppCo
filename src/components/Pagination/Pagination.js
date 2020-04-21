import React from 'react';
import PropTypes from 'prop-types';
import showPagination from './helpers';
import css from './Pagination.module.css';

const Pagination = ({ page, totalPages }) => {
  const total = showPagination(page);

  const handleChangePage = number => {
    // console.log(number);
  };

  return (
    <div className={css.container_paginate}>
      <ul className={css.paginate_list}>
        <li>
          <button
            // onClick={handlePrevPage}
            disabled={page === 1}
            className={css.paginate_next__prev}
            type="button"
          >{`<`}</button>
        </li>
        {total.map(number => (
          <li key={number}>
            <button
              className={css.paginate_btn}
              type="button"
              onClick={() => handleChangePage(page + 1)}
              disabled={page === number}
            >
              {number}
            </button>
          </li>
        ))}
        {page < 15 && (
          <>
            <li>
              <span className={css.paginate_span}>...</span>
            </li>
            <li>
              <button
                className={css.paginate_btn}
                type="button"
                // onClick={() => handleChangePage(totalPages)}
                disabled={page === totalPages}
              >
                {totalPages}
              </button>
            </li>
          </>
        )}
        <li>
          <button
            disabled={page === totalPages}
            // onClick={handleNextPage}
            className={css.paginate_next__prev}
            type="button"
          >{`>`}</button>
        </li>
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  // handleChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  // handleNextPage: PropTypes.func.isRequired,
  // handlePrevPage: PropTypes.func.isRequired,
};

export default Pagination;
