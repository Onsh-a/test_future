import React from 'react';
import Class from './style/lazyLoad.module.scss';

const LazyLoad = (props) => {


  return (
    <div className={Class.container}>
      <div className={Class.loader}>
        <div className={Class.loader__dot}></div>
        <div className={Class.loader__dot}></div>
        <div className={Class.loader__dot}></div>
        <div className={Class.loader__dot}></div>
        <div className={Class.loader__dot}></div>
        <div className={Class.loader__dot}></div>
      </div>
    </div>
  );
}

export default LazyLoad;
