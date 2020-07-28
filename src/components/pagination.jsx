import React from 'react';
import Class from './style/pagination.module.scss';
import LazyLoad from './lazyLoad'

const Pagination = ({ usersPerPage, totalUsers, paginate, currentPageNumb, lazyLoad }) => {



  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i)
  }

  if (lazyLoad === true) {
    return <LazyLoad />
  }

  if (totalUsers / usersPerPage < 1 ) {
    return null;
  }



  let pageNumber = pageNumbers.map((item) => {
    return <div key={item} onClick={ () => paginate(item) } className={item === currentPageNumb ? Class.pagination_item_active : Class.pagination_item}>{item}</div>
  });

  return (

    <nav className={Class.pagination}>


       { pageNumber }


    </nav>

  );
}

export default Pagination;
