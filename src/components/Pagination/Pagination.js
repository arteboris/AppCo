import React from 'react';
import PropTypes from 'prop-types';
import showPagination from './helpers';
import css from './Pagination.module.css';

const Pagination = ({ page, totalPages, changePage }) => {
  const total = showPagination(page);

  return (
    <div className={css.container_paginate}>
      <ul className={css.paginate_list}>
        <li>
          <button
            onClick={() => changePage(page - 1)}
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
              onClick={() => changePage(number)}
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
                onClick={() => changePage(totalPages)}
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
            onClick={() => changePage(page + 1)}
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
  changePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  // handleNextPage: PropTypes.func.isRequired,
  // handlePrevPage: PropTypes.func.isRequired,
};

export default Pagination;
