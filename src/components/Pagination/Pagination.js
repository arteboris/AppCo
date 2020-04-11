import React from 'react';
import PropTypes from 'prop-types';
import css from './Pagination.module.css';

const Pagination = ({
  totalPage,
  handleChangePage,
  page,
  handleNextPage,
  handlePrevPage,
}) => {
  const totalPages = [];

  if (page < 5) {
    for (let i = 1; i <= 5; i += 1) {
      totalPages.push(i);
    }
  } else if (page > 4 && page < 10) {
    for (let i = 5; i <= 10; i += 1) {
      totalPages.push(i);
    }
  } else if (page > 9 && page < 15) {
    for (let i = 10; i <= 15; i += 1) {
      totalPages.push(i);
    }
  } else if (page > 14 && page <= 20) {
    for (let i = 15; i <= 20; i += 1) {
      totalPages.push(i);
    }
  }

  return (
    <div className={css.container_paginate}>
      <ul className={css.paginate_list}>
        <li>
          <button
            onClick={handlePrevPage}
            disabled={page === 1}
            className={css.paginate_next__prev}
            type="button"
          >{`<`}</button>
        </li>
        {totalPages.map(number => (
          <li key={number}>
            <button
              className={css.paginate_btn}
              type="button"
              onClick={() => handleChangePage(number)}
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
                onClick={() => handleChangePage(totalPage)}
                disabled={page === totalPage}
              >
                {totalPage}
              </button>
            </li>
          </>
        )}
        <li>
          <button
            disabled={page === totalPage}
            onClick={handleNextPage}
            className={css.paginate_next__prev}
            type="button"
          >{`>`}</button>
        </li>
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  totalPage: PropTypes.number.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  handleNextPage: PropTypes.func.isRequired,
  handlePrevPage: PropTypes.func.isRequired,
};

export default Pagination;
